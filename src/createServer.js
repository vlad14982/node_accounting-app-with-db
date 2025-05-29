'use strict';

const express = require('express');
const cors = require('cors');
const { expensesRouter } = require('./routes/expensesRouter');
const { usersRouter } = require('./routes/usersRouter');

function createServer() {
  const app = express();

  app.use(cors());

  app.use('/expenses', express.json(), expensesRouter);
  app.use('/users', express.json(), usersRouter);

  return app;
}

module.exports = {
  createServer,
};
