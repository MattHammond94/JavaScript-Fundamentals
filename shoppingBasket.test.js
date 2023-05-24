const ShoppingBasket = require('./shoppingBasket');

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
});