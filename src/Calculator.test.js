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
    expect(calculator.minus(0.1).result).toEqual(0);
  });

  test('between 3 positive numbers', () => {
    expect(calculator.minus(0.1).minus(0.2).result).toEqual(-0.2);
  });

  test('between 1 positive and 1 negative number', () => {
    expect(calculator.minus(-0.1).result).toEqual(0.2);
  });

  test('between 4 negative numbers', () => {
    calculator = new Calculator(-0.1);
    expect(
      calculator
        .minus(-0.001)
        .minus(-0.0001)
        .minus(-0.00001).result
    ).toEqual(-0.09889);
  });

  test('in a chain with additions', () => {
    expect(calculator.add(1).minus(0.6).result).toEqual(0.5);
  });

  test('between 10 numbers', () => {
    expect(
      calculator
        .minus(-5)
        .minus(-4)
        .minus(-3)
        .minus(-2)
        .minus(-1)
        .minus(0)
        .minus(1)
        .minus(2)
        .minus(3).result
    ).toEqual(9.1);
  });
});

describe('make multiplications', () => {
  test('between 2 positive numbers', () => {
    expect(calculator.multiply(0.4).result).toEqual(0.04);
  });

  test('between 3 positive numbers', () => {
    expect(calculator.multiply(4.62).multiply(0.02).result).toEqual(0.00924);
  });

  test('between 1 positive and 1 negative number', () => {
    expect(calculator.multiply(-0.1234).result).toEqual(-0.01234);
  });

  test('between 4 negative numbers', () => {
    calculator = new Calculator(-0.1);
    expect(
      calculator
        .multiply(-0.001)
        .multiply(-0.0001)
        .multiply(-0.00001).result
    ).toEqual(1e-13);
  });

  test('in a chain with additions and minusions', () => {
    expect(
      calculator
        .add(1)
        .minus(0.6)
        .multiply(-1.4).result
    ).toEqual(-0.7);
  });

  test('between 10 numbers', () => {
    expect(
      calculator
        .multiply(-5)
        .multiply(-4)
        .multiply(-3)
        .multiply(-2)
        .multiply(-1)
        .multiply(0)
        .multiply(1)
        .multiply(2)
        .multiply(3).result
    ).toEqual(0);
  });
});

describe('make divisions', () => {
  test('between 2 positive numbers', () => {
    expect(calculator.divide(0.4).result).toEqual(0.25);
  });

  test('between 3 positive numbers', () => {
    expect(calculator.divide(4.62).divide(0.02).result).toEqual(
      1.0822510822510822
    );
  });

  test('between 1 positive and 1 negative number', () => {
    expect(calculator.divide(-0.1234).result).toEqual(-0.8103727714748785);
  });

  test('between 4 negative numbers', () => {
    calculator = new Calculator(-0.1);
    expect(
      calculator
        .divide(-0.001)
        .divide(-0.0001)
        .divide(-0.00001).result
    ).toEqual(100000000000);
  });

  test('in a chain with additions and minusions and multiplications', () => {
    expect(
      calculator
        .add(1)
        .minus(0.6)
        .multiply(-1.4)
        .divide(5).result
    ).toEqual(-0.14);
  });

  test('divide by 0', () => {
    expect(calculator.divide(0).result).toEqual(Infinity);
  });
  test('between 10 numbers', () => {
    expect(
      calculator
        .divide(-5)
        .divide(-4)
        .divide(-3)
        .divide(-2)
        .divide(-1)
        .divide(1)
        .divide(2)
        .divide(3)
        .divide(4).result
    ).toEqual(-0.00003472222222222222);
  });
});

describe('factorial calculations', () => {
  test('should return 24 with a value of 4', () => {
    calculator = new Calculator(4);
    expect(calculator.factorial()).toEqual(24);
  });

  test('should return 1 with 0', () => {
    calculator = new Calculator(0);
    expect(calculator.factorial()).toEqual(1);
  });

  test('should not be able to process negative non-integer numbers', () => {
    function negativeNonInteger() {
      calculator.factorial(-3.2);
    }
    expect(negativeNonInteger).toThrowError(
      'Only positive integers are allowed'
    );
  });

  test('should not be able to process positive non-integer numbers', () => {
    function positiveNonInteger() {
      calculator.factorial(3.2);
    }
    expect(positiveNonInteger).toThrowError(
      'Only positive integers are allowed'
    );
  });
});
