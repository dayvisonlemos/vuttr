const supertest = require('supertest');
const server = require('../src/server');

global.request = supertest(server);
