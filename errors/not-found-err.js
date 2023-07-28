const { NotFoundErrorCode, NotFoundErrorMessage } = require('../utils/errorMessages');

class NotFoundError extends Error {
  constructor(message = NotFoundErrorMessage) {
    super(message);
    this.statusCode = NotFoundErrorCode;
  }
}

module.exports = NotFoundError;
