const express = require('express');
const api = require('./api');
const { exceptionHandler } = require('./exceptions');

const server = express();

server.use(express.json());

server.use(api);

server.use(exceptionHandler);

module.exports = server;
