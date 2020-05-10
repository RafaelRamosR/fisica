import MUA from "./clases/Class.js";
import Calculate from "./clases/Calculate.js";
const cal = new Calculate

nameOperation.addEventListener('change', () => {
  if(insert.children.length !== 0){
    insert.children[0].remove()
  }

  if(nameOperation.value){
    let nodo = form_mua.querySelector(`select[name='unit-${nameOperation.value}']`)
    let copyNode = nodo.cloneNode(true);
    insert.appendChild(copyNode)
  }
})

form_mua.addEventListener('submit', (e) => {
  e.preventDefault()

  let initialVelocity = e.target.initialVelocity.value,
  finalVelocity = e.target.finalVelocity.value,
  acceleration = e.target.acceleration.value,
  distance = e.target.distance.value,
  time = e.target.time.value

  cal.setFinalVelocity(initialVelocity)
  cal.setFinalVelocity(finalVelocity)
  cal.setAcceleration(acceleration)
  cal.setDistance(distance)
  cal.setTime(time)

  switch (e.target.nameOperacion.value) {
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

  alert(`
    Velocidad inicial: ${cal.getInitialVelocity()}
    Velocidad final: ${cal.getFinalVelocity()}
    Aceleración: ${cal.getAcceleration()}
    Distancia: ${cal.getDistance()}
    Tiempo: ${cal.getTime()}
  `)
})