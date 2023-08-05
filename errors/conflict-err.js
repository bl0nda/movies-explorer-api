const { ConflictErrorCode, ConflictErrorMessage } = require('../utils/errorMessages');

class ConflictError extends Error {
  constructor(message = ConflictErrorMessage) {
    super(message);
    this.statusCode = ConflictErrorCode;
  }
}

module.exports = ConflictError;
