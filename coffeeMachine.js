// A simple coffee machine
class CoffeeMachine {
  _waterAmount = 0;

  #waterLimit = 300;

  setWaterAmount(value) {
    if (value < 0) throw new Error('Water should not be negative');
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  getWaterLimit() {
    return this.#waterLimit;
  }

  #checkWtaterLimit(value) {
    if (value < 0) throw new Error('Water can not be less tahn zero');
    if (value > this.#waterLimit) throw new Error('The water limit has been exceeded!');
  }

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee machine with power ${power}`);
  }

  getPower() {
    return this.power;
  }
}

const simpleCoffeeMachine = new CoffeeMachine(900);
simpleCoffeeMachine.waterAmount = 90;
simpleCoffeeMachine.color = 'green';
console.log(simpleCoffeeMachine);
simpleCoffeeMachine.setWaterAmount(60);
console.log(simpleCoffeeMachine.getPower());
console.log(simpleCoffeeMachine.getWaterLimit());
