let operacion = document.getElementById('operacion'),
    calcular = document.getElementById('calcular'),
    inputs = Array.from(document.querySelectorAll('input')),
    selects = Array.from(document.querySelectorAll('select')),
    inputSelects = selects.concat(inputs)

//Si no se selecciona una operación se desactivan los inputs
const desactivar = () => {
  document.getElementById('form').reset()
  nameOperation = operacion.value
  for(let input of inputSelects.slice(1)){
    input.disabled = nameOperation === "" ? true : false
  }
  return nameOperation
}

//Establece el tipo de unidad de la operación
const typeSelect = () => {
  let id = desactivar(),
  resultado =document.getElementById('resultado'),
  hijos = resultado.children
/* Agrega o elimina un select según la elección */
  for (let hijo of hijos){
    hijo.children[0].children[1].classList.remove('error')
    let madre = document.getElementById('madre')
    if(id === "" || madre.children.length > 1){
      madre.children[0].remove()
    }
    if(hijo.querySelector(`select[name='unidad-${nameOperation}']`) !== null){
      let typeUnit = hijo.children[1].children[0]
      madre.appendChild(typeUnit.cloneNode(true))
    }
  }
/* Desactiva y envia al final el input que mostrará el resultado */
  for (let hijo of hijos){
    if(id !== "" && hijo.querySelector(`input[name='${id}']`) !== null){
      resultado.appendChild(hijo)
      hijo.children[0].children[1].value = 0
      hijo.children[0].children[1].disabled = true
      hijo.children[1].children[0].disabled = true
    }
  }
}

/*Valida los inputs*/
const validar = () => {
  let count = 0;
  if(nameOperation === ""){
    alert('Debe seleccionar una operación')
    return false
  }
  for(let input of inputSelects){
    if(!input.value || typeof parseInt(input.value) !== "number"){
      ++count
      error(input)
    }
    input.classList.remove('error')
  }
  if(count===0){
    procesar()
  }
}

/*Aplica la clase error a los inputs*/
const error = (valor) => {
  valor.classList.remove('error')
  setTimeout(() => {
    valor.classList.add('error')
  }, 50)
  return true
}

/*Calcula y devuelve el resultado de la operación*/
const procesar = () => {
  let distancia = document.getElementsByName('distancia'),
  tiempo = document.getElementsByName('tiempo'),
  velocidad = document.getElementsByName('velocidad'),
  d = distancia[0].value,
  t = tiempo[0].value,
  v = velocidad[0].value

  switch (operacion.value) {
    case 'distancia':
      distancia[0].value = v*t
      break;
    case 'tiempo':
      tiempo[0].value = d/v
      break;
    case 'velocidad':
      velocidad[0].value = d/t
      break;
    default:
      alert('Hubo un error en la operación.');
  }
}

nameOperation = desactivar()
operacion.addEventListener('change',typeSelect)
calcular.addEventListener('click',validar)