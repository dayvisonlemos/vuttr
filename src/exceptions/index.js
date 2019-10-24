const httpStatus = require('http-status');
const Exception = require('./exception');
const BadRequestException = require('./bad.request.exception');

// eslint-disable-next-line no-unused-vars
const exceptionHandler = (err, req, res, next) => {
  const error = {
    code: err.code || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message || 'something went wrong',
  };

  if (err.errors) {
    const [ValidationErrorItem] = err.errors;
    error.code = httpStatus.BAD_REQUEST;
    error.message = ValidationErrorItem.message;
  }

  res.status(error.code).json(error);
};

module.exports = {
  Exception,
  BadRequestException,
  exceptionHandler,
};
