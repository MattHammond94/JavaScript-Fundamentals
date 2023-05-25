const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  it('Should return 20 when getTemperature is called', () => {
    const therm1 = new Thermostat();
    expect(therm1.getTemperature()).toBe(20);
  });

  it('Should increase the temperature by 1 when up method is called', () => {
    const therm1 = new Thermostat();
    therm1.up();
    expect(therm1.getTemperature()).toBe(21);
  });

  it('Should increase the temperature to a maximum of 32', () => {
    const therm1 = new Thermostat();
    therm1.setPowerSavingMode(false);
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    therm1.up();
    expect(therm1.getTemperature()).toBe(32);
  });

  it('Should decrease the temperature by 1 when the down method is called', () => {
    const therm2 = new Thermostat();
    therm2.down();
    expect(therm2.getTemperature()).toBe(19);
  });

  it('Should not allow the temperature to decrease lower than 10', () => {
    const therm2 = new Thermostat();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    therm2.down();
    expect(therm2.getTemperature()).toBe(10);
  });

  it('Should return the correct temperature after multiple up and down calls', () => {
    const therm3 = new Thermostat();
    therm3.down();
    therm3.up();
    therm3.up();
    therm3.up();
    therm3.up();
    therm3.down();
    expect(therm3.getTemperature()).toBe(22);
  });

  it('Should reset the temperature to 20 after reset is called', () => {
    const therm4 = new Thermostat();
    therm4.down();
    therm4.up();
    therm4.up();
    therm4.up();
    therm4.up();
    therm4.down();
    therm4.reset();
    expect(therm4.getTemperature()).toBe(20);
  });

  it('Should not allow the temperature to exceed 25 when power save mode is set to true', () => {
    const therm5 = new Thermostat();
    therm5.up();
    therm5.up();
    therm5.up();
    therm5.up();
    therm5.up();
    therm5.up();
    therm5.up();
    expect(therm5.getTemperature()).toBe(25);
  });

  it('Should only allow the temperature to reach up to 32 when power save mode is set to false', () => {
    const therm6 = new Thermostat();
    therm6.setPowerSavingMode(false);
    therm6.up();
    therm6.up();
    therm6.up();
    therm6.up();
    therm6.up();
    therm6.up();
    therm6.up();
    therm6.up();
    expect(therm6.getTemperature()).toBe(28);
  });

  it('Should not allow the setPowerSavingMode to receive anything other than a boolean', () => {
    const therm7 = new Thermostat();
    expect(therm7.setPowerSavingMode('false')).toBe('This is not a valid input');
  });

  it('Should return the correct energy usage level when called', () => {
    const therm8 = new Thermostat();
    therm8.setPowerSavingMode(false);
    therm8.up();
    therm8.up();
    therm8.up();
    therm8.up();
    therm8.up();
    therm8.up();
    expect(therm8.getCurrentUsage()).toBe('You are currently on High-Usage');
  });

  it('Should return the correct energy usage level when called', () => {
    const therm8 = new Thermostat();
    therm8.up();
    therm8.up();
    therm8.up();
    therm8.up();
    therm8.up();
    expect(therm8.getCurrentUsage()).toBe('You are currently on Medium-Usage');
  });

  it('Should return the correct energy usage level when called', () => {
    const therm8 = new Thermostat();
    therm8.down();
    therm8.down();
    therm8.down();
    therm8.down();
    expect(therm8.getCurrentUsage()).toBe('You are currently on Low-Usage');
  });
});
