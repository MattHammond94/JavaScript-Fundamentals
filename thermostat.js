class Thermostat {

  constructor() {
    this.temperature = 20;
    this.savingMode = true
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.savingMode === true && this.temperature === 25) { 
      this.temperature = 25
    } else {
      this.temperature += 1;
    }
  }

  down() {
    this.temperature -= 1;
  }

  reset() {
    this.temperature = 20
  }

  setPowerSavingMode(boolean) {
    this.savingMode = boolean;
  }

}

module.exports = Thermostat;
