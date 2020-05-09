export default class Operations{
  constructor(nameOperation, unitOperation){
    this.nameOperation = nameOperation,
    this.unitOperation = unitOperation,
    this.initialVelocity = 0,
    this.finalVelocity = 0,
    this.acceleration = 0,
    this.distance = 0,
    this.time = 0
  }

  getName() {
    return this.nameOperation
  }

  getUnit() {
    return this.unitOperation
  }

  getInitial() {
      return this.initialVelocity
  }

  getFinal(){
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

  setName(nameOperation) {
    this.nameOperation = nameOperation
  }

  setUnit(unitOperation) {
    this.unitOperation = unitOperation
  }

  setInitial(initialVelocity) {
      this.initialVelocity = initialVelocity
  }

  setFinal(finalVelocity){
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

  static calDistance1(vi,t,a){
    result = (vi*t)+(a*(t*t)/2)
    return this.distance = (result).toFixed(2)
  }

  static calDistance2(vi,vf,a){
    result = (Math.pow(vf, 2)-Math.pow(vi, 2))/(a*2)
    return this.distance = (result).toFixed(2)
  }

  static calTime(v,d){
    return this.time = (d/v).toFixed(2)
  }

  static calInitialVelocity(d,t){
    return this.initialVelocity = (d/t).toFixed(2)
  }

  static calFinalVelocity(d,t){
    return this.initialVelocity = (d/t).toFixed(2)
  }
}