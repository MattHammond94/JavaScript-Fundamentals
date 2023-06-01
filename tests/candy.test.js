const Candy = require('../lib/candy');

describe(Candy, () => {
  it('Should return the correct name when getName is called', () => {
    const randomCandy = { getName: () => 'Marshmellows' };
    // const candy1 = new Candy('KitKat', 2.99);
    // expect(candy1.getName()).toBe('KitKat');
    expect(randomCandy.getName()).toBe('Marshmellows');
  });

  it('Should return the correct price when getPrice is called', () => {
    const candy2 = new Candy('Wispa', 4.99);
    expect(candy2.getPrice()).toBe(4.99);
  });
});
