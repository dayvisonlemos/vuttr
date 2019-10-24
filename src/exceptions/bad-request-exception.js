const httpstatus = require('http-status');
const Exception = require('./exception');

class BadRequestException extends Exception {
  constructor(message) {
    super(message);
    this.code = httpstatus.BAD_REQUEST;
  }
}

module.exports = BadRequestException;
