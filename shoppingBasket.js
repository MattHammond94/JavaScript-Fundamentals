class ShoppingBasket {

  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    return 0;
  }

  addItem(candy) {
    return this.items.push(candy);
  }

}

module.exports = ShoppingBasket;