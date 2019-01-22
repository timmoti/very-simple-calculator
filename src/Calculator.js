module.exports = class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result = (this.result * 1000 + value * 1000) / 1000;
    return this;
  }

  minus(value) {
    this.result = (this.result * 1000 - value * 1000) / 1000;
    return this;
  }

  multiply(value) {
    this.result = (this.result * 100 * (value * 100)) / 10000;
    if (this.result === -0) {
      this.result = 0;
    }
    return this;
  }

  divide(value) {
    this.result = (this.result * 100000) / (value * 100000);
    return this;
  }

  factorial() {
    if (this.result % 1 !== 0 || this.result < 0) {
      throw new Error('Only positive integers are allowed');
    }
    if (this.result === 0) {
      return 1;
    } else {
      return new Calculator(this.result - 1).factorial() * this.result;
    }
  }
};
