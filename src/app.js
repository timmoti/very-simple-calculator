const express = require('express');
const app = express();

const router = require('./routes/calculations');

app.use(express.static('client'));
app.use(express.json());

app.use('/calculator', router);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = status.NOT_FOUND;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || status.INTERNAL_SERVER_ERROR);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
