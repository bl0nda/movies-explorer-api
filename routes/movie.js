const moviesRouter = require('express').Router();

const { getmovies, createMovie, deleteMovie } = require('../controllers/movie');

const { movieIdValidation, createMovieValidation } = require('../middlewares/validate');

moviesRouter.get('/movies', getmovies);

moviesRouter.delete('/movies/:movieId', movieIdValidation, deleteMovie);

moviesRouter.post('/movies', createMovieValidation, createMovie);

module.exports = moviesRouter;
