const Calculator = require('./src/Calculator');
const readlineSync = require('readline-sync');

console.log('Welcome to a Very Simple Calculator');

const x = readlineSync.questionFloat('Please enter a number: ');
let calculator = new Calculator(x);

let symbol;
while (symbol !== 'AC') {
  symbol = readlineSync.question(
    'Please enter an operation (+, -. *, /, !, AC): '
  );
  let y;
  if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
    y = readlineSync.questionFloat('Please enter another number: ');
  }

  let result;
  try {
    switch (symbol) {
      case '+':
        result = calculator.add(y).result;
        console.log(`Current Result: ${result}`);
        break;
      case '-':
        result = calculator.minus(y).result;
        console.log(`Current Result: ${result}`);
        break;
      case '*':
        result = calculator.multiply(y).result;
        console.log(`Current Result: ${result}`);
        break;
      case '/':
        result = calculator.divide(y).result;
        console.log(`Current Result: ${result}`);
        break;
      case '!':
        result = calculator.factorial();
        console.log(`Current Result: ${result}`);
        break;
      case 'AC':
        console.log('All results cleared, Goodbye!');
        break;
      default:
        console.log('Unacceptable input');
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
