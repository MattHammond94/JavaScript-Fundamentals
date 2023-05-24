class ShoppingBasket {

  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    let total = 0;
    this.items.map((candy) => {
      total += candy.getPrice();
    });
    return total;
  }

  addItem(candy) {
    return this.items.push(candy);
  }

}

module.exports = ShoppingBasket;