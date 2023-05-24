const multiply = require('./multiply');

describe('multiply', () => {
  it('Multiplies 3 and 3', () => {
    expect(multiply(3, 3)).toBe(9);
  }); 

  it ('Multiples 5 and 5', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});