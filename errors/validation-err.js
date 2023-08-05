const { ValidationErrorCode, ValidationErrorMessage } = require('../utils/errorMessages');

class ValidationError extends Error {
  constructor(message = ValidationErrorMessage) {
    super(message);
    this.statusCode = ValidationErrorCode;
  }
}

module.exports = ValidationError;
