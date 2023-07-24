/* eslint-disable no-useless-escape */
const { celebrate, Joi } = require('celebrate');

const URLRegex = /^https?:\/\/(www\.)?[a-z0-9\-._~:\/?#[\]@!$&'()*+,;=]+\.[a-z0-9\-._~:\/?#[\]@!$&'()*+,;=]+#?/;

module.exports.updateUserValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
});

module.exports.updateAvatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(URLRegex).required(),
  }),
});

module.exports.movieIdValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
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
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.createUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string(),
  }),
});
