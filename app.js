const express = require('express');
const app = express();

const router = require('./routes/calculations');

app.use(express.static('client'));
app.use(express.json());

app.use('/calculator', router);

module.exports = app;
