const { ForbiddenErrorCode, ForbiddenErrorMessage } = require('../utils/errorMessages');

class ForbiddenError extends Error {
  constructor(message = ForbiddenErrorMessage) {
    super(message);
    this.statusCode = ForbiddenErrorCode;
  }
}

module.exports = ForbiddenError;
