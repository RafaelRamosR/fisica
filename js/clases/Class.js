export default class MUA {
  constructor(initialVelocity, finalVelocity, acceleration, distance, time){
    this.initialVelocity = initialVelocity,
    this.finalVelocity = finalVelocity,
    this.acceleration = acceleration,
    this.distance = distance,
    this.time = time
  }

  getInitialVelocity() {
    return this.initialVelocity
  }

  getFinalVelocity() {
    return this.finalVelocity
  }

  getAcceleration(){
    return this.acceleration
  }

  getDistance(){
    return this.distance
  }

  getTime(){
    return this.time
  }

  setInitialVelocity(initialVelocity) {
    if(initialVelocity !== "")
      this.initialVelocity = parseFloat(initialVelocity.toFixed(4))
  }

  setFinalVelocity(finalVelocity){
    if(finalVelocity !== "")
      this.finalVelocity = parseFloat(finalVelocity.toFixed(4))
  }

  setAcceleration(acceleration){
    if(acceleration !== "")
      this.acceleration = parseFloat(acceleration.toFixed(4))
  }

  setDistance(distance){
    if(distance !== "")
      this.distance = parseFloat(distance.toFixed(4))
  }

  setTime(time){
    if(time !== "")
      this.time = parseFloat(time.toFixed(4))
  }

  // Methods
  calculateInitialVelocity(){}

  calculateFinalVelocity(){}

  calculateAcceleration(){}

  calculateDistance(){}

  calculateTime(){}
}