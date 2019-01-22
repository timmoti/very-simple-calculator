const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.status(200).json({ message: 'Welcome to a Very Simple Calculator' });
});

module.exports = router;
