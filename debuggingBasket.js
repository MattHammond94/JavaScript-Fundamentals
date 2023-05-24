const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = [];
  }

  addCandy(candy) {
    this.candies.push(candy); 
  }

  applyDiscount(discount) {
    this.discount += discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}

const basket1 = new ShoppingBasket;
basket1.applyDiscount(10);
basket1.addCandy(new Candy('Jelly-Beans', 14.99));
basket1.addCandy(new Candy('BonBons', 9.99));
basket1.addCandy(new Candy('Maoam', 5.99));
console.log(basket1.getTotalPrice());
