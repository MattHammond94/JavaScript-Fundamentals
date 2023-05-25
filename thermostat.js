class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature += 1;
  }

  down() {
    this.temperature -= 1;
  }

  reset() {
    this.temperature = 20
  }

}

module.exports = Thermostat;
