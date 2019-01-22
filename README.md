# very-simple-calculator
A Very Simple Calculator created in node with web APIs and CLI interactions

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation
Here are the steps to download a local copy of the app

```
1. Fork the repo.
2. git clone https://github.com/timmoti/very-simple-calculator.git
3. npm install 
```

## Interacting on the CLI
The Very Simple Calculator can be utilised on the command line interface.

Start the calculator as follows:
```
1. Make sure you are in the calculator directory. Otherwise cd into it.
2. node index.js
```

Follow the onscreen instructions to make simple addition, subtraction, multiplication, division and factorial operations on numbers.
Both positive and negative integers and non-integers are accepted.
As a normal calculator would function, you may chain operations one after the other after getting intermediate results from performing operations between 2 numbers.

*Note: factorial functions may only be performed on positive integers.*

## Using the Web API
A set of web APIs have been created as well for further development into a potential online-based calculator.

You may test out the route endpoints locally by the following steps:

```
1. Make sure you are in the calculator director. Otherwise cd into it.
2. node server.js
3. Use a REST client like Insomnia or Postman to test the endpoints
4. Prepend http://localhost:3000/calculator before each of the following endpoints
```

Route endpoint | Request Type | What it does | Usage example
-|-|-|-
/about | GET | Displays welcome message | http://localhost:3000/calculator/about
/:num | POST | Sets value from request parameters. Used to clear current computed value as well | http://localhost:3000/calculator/5
/value | GET | Retrieves and displays current value | http://localhost:3000/calculator/value
/add/:num | POST | Adds number in parameters to current value | http://localhost:3000/calculator/add/40
/minus/:num | POST | Subtracts number in parameters from current value | http://localhost:3000/calculator/minus/100
/multiply/:num | POST | Multiplies current value by number in parameters | http://localhost:3000/calculator/multiply/0.001
/divide/:num | POST | Divides current value by number in parameters | http://localhost:3000/calculator/divide/5
/factorial | GET | Calculates and displays the factorial of the current value which must be a positive integer | http://localhost:3000/calculator/factorial

## Built With
- Node Js
- Express Js

## Author
Timothy Tan
