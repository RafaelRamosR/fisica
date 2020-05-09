import MUA from "./clases/Class.js";
import Calculate from "./clases/Calculate.js";
const cal = new Calculate

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

  alert(`Velocidad inicial: ` + cal.getInitialVelocity())
})