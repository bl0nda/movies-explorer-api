const { ServerErrorCode, ServerErrorMessage } = require('../utils/errorMessages');

const handleError = (err, req, res, next) => {
  const { statusCode = ServerErrorCode, message } = err;
  console.error(err);
  res
    .status(statusCode)
    .send({
      message: statusCode === ServerErrorCode
        ? ServerErrorMessage
        : message,
    });
  next();
};

module.exports = handleError;
