const Calculator = require('./Calculator');
let calculator;
beforeEach(() => {
  calculator = new Calculator(0.1);
});
describe('make additions', () => {
  test('between 2 positive numbers', () => {
    expect(calculator.add(0.2).result).toEqual(0.3);
  });

  test('between 3 positive numbers', () => {
    expect(calculator.add(0.23).add(0.34).result).toEqual(0.67);
  });

  test('between 1 positive and 1 negative number', () => {
    expect(calculator.add(-4.423).result).toEqual(-4.323);
  });

  test('between 4 negative numbers', () => {
    calculator = new Calculator(-0.1);
    expect(
      calculator
        .add(-4.1523)
        .add(-5.2411)
        .add(-0.0003).result
    ).toEqual(-9.4937);
  });

  test('between 10 numbers', () => {
    expect(
      calculator
        .add(-5)
        .add(-4)
        .add(-3)
        .add(-2)
        .add(-1)
        .add(0)
        .add(1)
        .add(2)
        .add(3).result
    ).toEqual(-8.9);
  });
});

describe('make subtractions', () => {
  test('between 2 positive numbers', () => {
    expect(calculator.subtract(0.1).result).toEqual(0);
  });

  test('between 3 positive numbers', () => {
    expect(calculator.subtract(0.1).subtract(0.2).result).toEqual(-0.2);
  });

  test('between 1 positive and 1 negative number', () => {
    expect(calculator.subtract(-0.1).result).toEqual(0.2);
  });

  test('between 4 negative numbers', () => {
    calculator = new Calculator(-0.1);
    expect(
      calculator
        .subtract(-0.001)
        .subtract(-0.0001)
        .subtract(-0.00001).result
    ).toEqual(-0.09889);
  });

  test('in a chain with additions', () => {
    expect(calculator.add(1).subtract(0.6).result).toEqual(0.5);
  });

  test('between 10 numbers', () => {
    expect(
      calculator
        .subtract(-5)
        .subtract(-4)
        .subtract(-3)
        .subtract(-2)
        .subtract(-1)
        .subtract(0)
        .subtract(1)
        .subtract(2)
        .subtract(3).result
    ).toEqual(9.1);
  });
});

describe('make multiplications', () => {
  test('between 2 positive numbers', () => {
    expect(calculator.multiply(0.4)).toEqual(0.04);
  });
});
