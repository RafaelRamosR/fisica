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
      this.initialVelocity = initialVelocity
  }

  setFinalVelocity(finalVelocity){
    this.finalVelocity = finalVelocity
  }

  setAcceleration(acceleration){
    this.acceleration = acceleration
  }

  setDistance(distance){
    this.distance = distance
  }

  setTime(time){
    this.time = time
  }

  // Methods
  calculateInitialVelocity(){}

  calculateFinalVelocity(){}

  calculateAcceleration(){}

  calculateDistance(){}

  calculateTime(){}
}