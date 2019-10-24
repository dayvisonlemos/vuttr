const httpstatus = require('http-status');

class Exception extends Error {
  constructor(message) {
    super();
    this.code = httpstatus.INTERNAL_SERVER_ERROR;
    this.message = message;
    this.name = this.constructor.name;
  }
}

module.exports = Exception;
