const fizzbuzz = require('../lib/fizzbuzz');

describe('fizzbuzz', () => {
  it('Should return fizz when number passed is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('Should return a buzz when number passed is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('Should return FizzBuzz when number passed is divisible by both 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('Should return the passed number if it is not divisible by 3 or 5', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
});