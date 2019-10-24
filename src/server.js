const express = require('express');
const api = require('./api');

const server = express();

server.use(express.json());

server.use(api);

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  const error = {
    code: err.code || 500,
    message: err.message || 'something went wrong',
  };
  res.status(err.code).json(error);
});

module.exports = server;
