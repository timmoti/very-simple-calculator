const express = require('express');
const router = express.Router();
const Calculator = require('../Calculator');

let value = null;

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

module.exports = router;
