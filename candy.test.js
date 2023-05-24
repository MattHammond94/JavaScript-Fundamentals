const Candy = require('./candy');

describe(Candy, () => {
  it('Should return the correct name when getName is called', () => {
    // const randomCandy = { getName: () => 'Marshmellows' };
    const candy1 = new Candy('KitKat', 2.99);
    expect(candy1.getName()).toBe('KitKat');
    // expect(randomCandy.getName()).toBe('Marshmellows');
  });
});
