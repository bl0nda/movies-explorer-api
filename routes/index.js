const router = require('express').Router();

const userRouter = require('./user');
const moviesRouter = require('./movie');
const NotFoundError = require('../errors/not-found-err');

router.use(userRouter);
router.use(moviesRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Данные не найдены'));
});

module.exports = router;
