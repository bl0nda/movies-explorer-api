/* eslint-disable no-useless-escape */
const { celebrate, Joi } = require('celebrate');

const { URLRegex, EmailRegex } = require('../utils/Regex');

module.exports.updateUserValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email().pattern(EmailRegex),
  }),
});

module.exports.movieIdValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
});

module.exports.createMovieValidation = celebrate({
  body: Joi.object().keys({
    nameRu: Joi.string().required(),
    nameEn: Joi.string().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URLRegex),
    trailer: Joi.string().required().pattern(URLRegex),
    thumbnail: Joi.string().required().pattern(URLRegex),
    movieId: Joi.number().required(),
  }),
});

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().pattern(EmailRegex),
    password: Joi.string().required().min(8),
  }),
});

module.exports.createUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().pattern(EmailRegex),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
  }),
});
