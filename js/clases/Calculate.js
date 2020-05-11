import MUA from "./Class.js";

export default class Calculate extends MUA {
  constructor(initialVelocity, finalVelocity, acceleration, distance, time) {
    super(initialVelocity, finalVelocity, acceleration, distance, time)
  }

  calculateInitialVelocity() {
    let result
    try {
      if(!this.distance){
        result = this.finalVelocity - this.acceleration * this.time
      }else{
        result = Math.pow(this.finalVelocity, 2) - (2 * this.acceleration * this.distance)
        result = Math.sqrt(result)
      }
    } catch (e) {
      alert(e)
    }

    result = parseFloat(result.toFixed(4))
    this.setInitialVelocity(result)
    return result
  }

  calculateFinalVelocity() {
    let result

    try {
      if(!this.distance){
        result = this.finalVelocity + this.acceleration * this.time
      }else{
        result = Math.pow(this.initialVelocity, 2) * 2 * this.time * this.acceleration * this.distance
        result = Math.sqrt(result)
      }
    } catch (e) {
      alert(e)
    }
    result = parseFloat(result.toFixed(4))
    this.setFinalVelocity(result)
    return result
  }

  calculateAcceleration() {
    let result

    try {
      if(!this.distance){
        result = (this.finalVelocity - this.initialVelocity) / this.time
      }else{
        result = (Math.pow(this.finalVelocity, 2) - this.initialVelocity) - 2 * this.distance
      }
    } catch (e) {
      alert(e)
    }

    result = parseFloat(result.toFixed(4))
    this.setAcceleration(result)
    return result
  }

  calculateDistance() {
    let result

    try {
      if(!this.time){
        result = (Math.pow(this.finalVelocity, 2) - Math.pow(this.initialVelocity, 2)) / (2 * this.acceleration)
      }else{
        result = (this.initialVelocity * this.time) + (Math.pow(this.time, 2) * this.acceleration) / 2
      } 
    } catch (error) {
      alert(e)
    }

    result = parseFloat(result.toFixed(4))
    this.setDistance(result)
    return result
  }

  calculateTime(){
    let result

    try {
      result = (this.finalVelocity - this.initialVelocity) / this.acceleration
    } catch (error) {
      alert(e)
    }

    result = parseFloat(result.toFixed(4))
    this.setTime(result)
    return result
  }
}