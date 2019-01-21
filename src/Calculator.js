module.exports = class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result = (this.result * 1000 + value * 1000) / 1000;
    return this;
  }

  subtract(value) {
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
    this.result = (this.result * 1000) / (value * 1000);
    return this;
  }

  // factorial() {
  //   let currentValue = 1;
  //   let factor = this.result;
  //   while (currentValue != factor) {
  //     this.result = currentValue.this.multiply(currentValue + 1);
  //     currentValue++;
  //   }
  //   return this;
  // }

  factorial(value) {
    if (value % 1 !== 0 || value < 0) {
      throw new Error('Only positive integers are allowed');
    }
    if (value === 0) {
      return 1;
    } else {
      return this.factorial(value - 1) * value;
    }
  }
};
