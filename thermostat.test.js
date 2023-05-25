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
});
