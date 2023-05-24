const ShoppingBasket = require('./shoppingBasket');

describe(ShoppingBasket, () => {
  it('Should return 0 when getTotalPrice is called before adding any Candy', () => {
    const basket1 = new ShoppingBasket();
    expect(basket1.getTotalPrice()).toBe(0);
  });
});