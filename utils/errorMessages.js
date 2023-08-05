const ValidationErrorCode = 400;
const ValidationErrorMessage = 'Введены некорректные данные';

const UnauthorizedErrorCode = 401;
const UnauthorizedErrorMessage = 'Необходима авторизация';

const ForbiddenErrorCode = 403;
const ForbiddenErrorMessage = 'Нельзя удалить чужие данные';

const NotFoundErrorCode = 404;
const NotFoundErrorMessage = 'Запрошенные данные не найдены';

const ConflictErrorCode = 409;
const ConflictErrorMessage = 'Данные уже используются';

const ServerErrorCode = 500;
const ServerErrorMessage = 'На сервере произошла ошибка';

module.exports = {
  ValidationErrorCode,
  ValidationErrorMessage,
  UnauthorizedErrorCode,
  UnauthorizedErrorMessage,
  ForbiddenErrorCode,
  ForbiddenErrorMessage,
  NotFoundErrorCode,
  NotFoundErrorMessage,
  ConflictErrorCode,
  ConflictErrorMessage,
  ServerErrorCode,
  ServerErrorMessage,
};
