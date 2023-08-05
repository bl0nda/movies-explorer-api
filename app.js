require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { PORT = 3000, NODE_ENV, DB_URL_PROD } = process.env;

const app = express();

const helmet = require('helmet');

const { DB_URL } = require('./utils/DB_URL');
const { createUser, login } = require('./controllers/user');
const { loginValidation, createUserValidation } = require('./middlewares/validate');
const auth = require('./middlewares/auth');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleError = require('./middlewares/handleError');

const { limiter } = require('./middlewares/rateLimiter');

mongoose.connect(NODE_ENV === 'production' ? DB_URL_PROD : DB_URL)
  .then(() => {
    console.log('connected success');
  });

app.use(cors());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(limiter);

app.use(requestLogger);

app.post('/signup', createUserValidation, createUser);

app.post('/signin', loginValidation, login);

app.use(auth);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleError);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
