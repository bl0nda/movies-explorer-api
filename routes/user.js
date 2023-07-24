const userRouter = require('express').Router();

const { getCurrentUser, updateUser } = require('../controllers/user');

const { updateUserValidation } = require('../middlewares/validate');

userRouter.get('/users/me', getCurrentUser);

userRouter.patch('/users/me', updateUserValidation, updateUser);

module.exports = userRouter;
