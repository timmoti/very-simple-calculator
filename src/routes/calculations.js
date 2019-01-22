const express = require('express');
const router = express.Router();
const Calculator = require('../Calculator');

let value = 0;

router.get('/about', (req, res) => {
  res.status(200).json({ message: 'Welcome to a Very Simple Calculator' });
});

router.get('/value', (req, res) => {
  res.status(200).json(value);
});

router.post('/:num', (req, res) => {
  value = parseFloat(req.params.num);
  res.status(201).json(value);
});

router.post('/add/:num', (req, res) => {
  calculator = new Calculator(value);
  value = calculator.add(parseFloat(req.params.num)).result;
  res.status(201).json(value);
});

router.post('/minus/:num', (req, res) => {
  calculator = new Calculator(value);
  value = calculator.minus(parseFloat(req.params.num)).result;
  res.status(201).json(value);
});

router.post('/multiply/:num', (req, res) => {
  calculator = new Calculator(value);
  value = calculator.multiply(parseFloat(req.params.num)).result;
  res.status(201).json(value);
});

router.post('/divide/:num', (req, res) => {
  calculator = new Calculator(value);
  value = calculator.divide(parseFloat(req.params.num)).result;
  res.status(201).json(value);
});

router.get('/factorial', (req, res) => {
  calculator = new Calculator(value);
  value = calculator.factorial();
  res.status(200).json(value);
});

module.exports = router;
