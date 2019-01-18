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
};
