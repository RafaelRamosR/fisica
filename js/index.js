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

const convertVelocity = (value, unit, bool) => {
  if(value !== "" && unit !== ""){
    // convertir km/h a m/s
    if(unit == "km/h" && bool == true){
      value = value / 3.6
    }

    // convertir m/s a km/h
    if(unit == "m" && bool == false){
      value = value * 3.6
    }
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
  }
  return value
}

form_mua.addEventListener('submit', (e) => {
  e.preventDefault()

  if(validate(e.target))

  var units = ['m/s', 'm', 's', 'm/s2']

  // Declarar unidades
  let operation = e.target.nameOperation.value,
  uive = e.target.unit_initialVelocity.value,
  ufve = e.target.unit_finalVelocity.value,
  uacc = e.target.unit_acceleration.value,
  udis = e.target.unit_distance.value,
  utim = e.target.unit_time.value

  // 1. Se ingresa el valor a convertir
  // 2. Se ingresa la unidad para verificar si se necesita convertir
  // 3. Includes devuelve true o false para indicar el tipo de conversión
  let initialVelocity = convertVelocity(e.target.initialVelocity.value, uive, units.includes(e.target[1].value))
  let finalVelocity = convertVelocity(e.target.finalVelocity.value, ufve, units.includes(e.target[1].value))
  let acceleration = convertAcceleration(e.target.acceleration.value, uacc, units.includes(e.target[1].value))
  let distance = convertDistance(e.target.distance.value, udis, units.includes(e.target[1].value))
  let time = convertTime(e.target.time.value, utim, units.includes(e.target[1].value))

  cal.setFinalVelocity(initialVelocity)
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
    case "tiem":
      cal.calculateTime()
      break
    default:
      alert("ERROR: DEBESELECCIONAR UNA OPCIÓN")
      break
  }

  // ejemplo de resultado
  alert(`
    Velocidad inicial: ${cal.getInitialVelocity()}
    Velocidad final: ${cal.getFinalVelocity()}
    Aceleración: ${cal.getAcceleration()}
    Distancia: ${cal.getDistance()}
    Tiempo: ${cal.getTime()}
  `)
})