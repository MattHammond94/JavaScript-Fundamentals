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

  it('Should decrease the temperature by 1 when the down method is called', () => {
    const therm2 = new Thermostat();
    therm2.down();
    expect(therm2.getTemperature()).toBe(19);
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
});