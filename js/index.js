import MUA from "./clases/Class.js";
import Calculate from "./clases/Calculate.js";
const cal = new Calculate

// Agregar select de unidades
nameOperation.addEventListener('change', () => {
  // Si el div#insert tiene hijos, se eliminan
  if(insert.children.length !== 0){
    insert.children[0].remove()
  }

  // Una vez se seleciona la operación
  // se clona el select de unidades y se añade al div#insert
  if(nameOperation.value){
    let nodo = form_mua.querySelector(`select[name='unit_${nameOperation.value}']`)
    let copyNode = nodo.cloneNode(true);
    insert.appendChild(copyNode)
  }
})

// Validar formulario
const validate = (arr) => {
  const len = arr.length - 1
  let count = 0
  // Recorre todos los campos de e.target
  for (let i = 0; i < len; i++) {
    // Se cuentan todos los campos vacíos
    if(!arr[i].value){
      count++
    }
  }

  // No se puede realizar la operación si hay más de
  // dos campos vacío o no se ha definido el tipo de operación
  if(count > 2 || !arr[0].value){
    return false
  }
  return true
}

form_mua.addEventListener('submit', (e) => {
  e.preventDefault()

  if(!validate(e.target)){
    return alert('DATOS INSUFICIENTES')
  }

  // Declarar unidades
  let operation = e.target.nameOperation.value,
  uive = e.target.unit_initialVelocity.value,
  ufve = e.target.unit_finalVelocity.value,
  uacc = e.target.unit_acceleration.value,
  udis = e.target.unit_distance.value,
  utim = e.target.unit_time.value

  // Array con las unidades en metro
  var units = ['m/s', 'm', 's', 'm/s2']
  /*
    Se almacena true o false si hay alguna coincidencia
    con la unidad de la operación seleccionada
  */
  var checkUnits = units.includes(e.target[1].value)

  // 1. Se ingresa el valor a convertir
  // 2. La unidad permitirá saber el tipo de conversión
  // 3. El resultado de checkUnits indica si necesita ser convertido
  let initialVelocity = convertVelocity(e.target.initialVelocity.value, uive, checkUnits)
  let finalVelocity = convertVelocity(e.target.finalVelocity.value, ufve, checkUnits)
  let acceleration = convertAcceleration(e.target.acceleration.value, uacc, checkUnits)
  let distance = convertDistance(e.target.distance.value, udis, checkUnits)
  let time = convertTime(e.target.time.value, utim, checkUnits)

  cal.setInitialVelocity(initialVelocity)
  cal.setFinalVelocity(finalVelocity)
  cal.setAcceleration(acceleration)
  cal.setDistance(distance)
  cal.setTime(time)

  switch (operation) {
    case "initialVelocity":
      cal.calculateInitialVelocity()
      break
    case "finalVelocity":
      cal.calculateFinalVelocity()
      break
    case "acceleration":
      cal.calculateAcceleration()
      break
    case "distance":
      cal.calculateDistance()
      break
    case "time":
      cal.calculateTime()
      break
    default:
      alert("ERROR: DEBE SELECCIONAR UNA OPERACIÓN")
      break
  }

  viewResult(cal, checkUnits)
})

function viewResult(mua, checkUnits) {
  if(isNaN(mua.getInitialVelocity())) { mua.calculateInitialVelocity() }
  if(isNaN(mua.getFinalVelocity())) { mua.calculateFinalVelocity() }
  if(isNaN(mua.getAcceleration())) { mua.calculateAcceleration() }
  if(isNaN(mua.getDistance())) { mua.calculateDistance() }
  if(isNaN(mua.getTime())) { mua.calculateTime() }

  const aDiv = document.createElement("div")
  aDiv.classList.add("one-third.column.u-full-width")
  aDiv.innerHTML = `
    <div class="row">
      <div class="one-third column u-full-width">
        <h5>VELOCIDAD INICIAL</h5>
        <h2>${mua.getInitialVelocity()} ${checkUnits ? 'm/s' : 'km/h'}</h2>
      </div>
      <div class="one-third column u-full-width">
        <h5>VELOCIDAD FINAL</h5>
        <h2>${mua.getFinalVelocity()} ${checkUnits ? 'm/s' : 'km/h'}</h2>
      </div>
      <div class="one-third column u-full-width">
        <h5>ACELERACIÓN</h5>
        <h2>${mua.getAcceleration()} ${checkUnits ? 'm/s2' : 'km/h2'}</h2>
      </div>
    </div>
    <div class="row">
      <div class="one-third column u-full-width">
        <h5>DISTANCIA</h5>
        <h2>${mua.getDistance()} ${checkUnits ? 'm' : 'km'}</h2>
      </div>
      <div class="one-third column u-full-width">
        <h5>TIEMPO</h5>
        <h2>${mua.getTime()} ${checkUnits ? 'seg' : 'h'}</h2>
      </div>
      <div class="one-third column u-full-width">
        <button class="button-primary" id="volver">Regresar</button>
      </div>
    </div>
  `
  result.appendChild(aDiv)
}

// Conversión de valores
const convertVelocity = (value, unit, bool) => {
  if(value !== "" && unit !== ""){
    // convertir km/h a m/s
    if(unit == "km/h" && bool == true){
      value = value / 3.6
    }

    // convertir m/s a km/h
    if(unit == "m/s" && bool == false){
      value = value * 3.6
    }
    value = parseFloat(value)
  }
  return value
}

const convertAcceleration = (value, unit, bool) => {
  if(value !== "" && unit !== ""){
    // convertir km/h2 a m/s2
    if(unit == "km/h2" && bool == true){
      value = (value * 1000) / 12960000
    }

    // convertir m/s2 a km/h2
    if(unit == "m/s2" && bool == false){
      value = (value / 1000) * 12960000
    }
    value = parseFloat(value)
  }
  return value
}

const convertDistance = (value, unit, bool) => {
  if(value !== "" && unit !== ""){
    // convertir km a m
    if(unit == "km" && bool == true){
      value = value * 1000
    }

    // convertir m a km
    if(unit == "m" && bool == false){
      value = value / 1000
    }
    value = parseFloat(value)
  }
  return value
}

const convertTime = (value, unit, bool) => {
  if(value !== "" && unit !== ""){
    // convertir horas a segundos
    if(unit == "h" && bool == true){
      value = value * 3600
    }

    // convertir segundos a horas
    if(unit == "s" && bool == false){
      value = value / 3600
    }
    value = parseFloat(value)
  }
  return value
}