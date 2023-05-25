const ShoppingBasket = require('../lib/shoppingBasket');

describe(ShoppingBasket, () => {
  it('Should return 0 when getTotalPrice is called before adding any Candy', () => {
    const basket1 = new ShoppingBasket();
    expect(basket1.getTotalPrice()).toBe(0);
  });

  it('Should add a new candy to the items array', () => {
    const basket1 = new ShoppingBasket();
    const randomCandy = { getName: () => 'Marshmellows', getPrice: () => 3.99 };
    basket1.addItem(randomCandy);
    expect(basket1.items).toEqual([ randomCandy ]);
    expect(basket1.items[0].getName()).toBe('Marshmellows');
  });

  it('Should return the correct total price after multiple addItem calls', () => {
    const basket1 = new ShoppingBasket();
    const randomCandy = { getName: () => 'Marshmellows', getPrice: () => 3.99 };
    const randomCandyTwo = { getName: () => 'Picnic', getPrice: () => 4.99 };
    const randomCandyThree = { getName: () => 'DoubleDecker', getPrice: () => 2.99 };
    basket1.addItem(randomCandy);
    basket1.addItem(randomCandyTwo);
    basket1.addItem(randomCandyThree);
    expect(basket1.getTotalPrice()).toBe(11.97);
  });
});