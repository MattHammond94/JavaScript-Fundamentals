class Thermostat {

  constructor() {
    this.temperature = 20;
    this.savingMode = true;
    this.minimumTemp = 10;
    this.maxTemp = 32;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.savingMode === true && this.temperature === 25) { 
      this.temperature = 25;
    } else if (this.savingMode === false && this.temperature === this.maxTemp) {
      this.temperature = 32;
    } else {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature === this.minimumTemp) {
      this.minimumTemp
    } else {
      this.temperature -= 1;
    }
  }

  reset() {
    this.temperature = 20
  }

  setPowerSavingMode(boolean) {
    this.savingMode = boolean;
  }

}

module.exports = Thermostat;
