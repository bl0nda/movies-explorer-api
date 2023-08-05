const { UnauthorizedErrorCode, UnauthorizedErrorMessage } = require('../utils/errorMessages');

class UnauthorizedError extends Error {
  constructor(message = UnauthorizedErrorMessage) {
    super(message);
    this.statusCode = UnauthorizedErrorCode;
  }
}

module.exports = UnauthorizedError;
