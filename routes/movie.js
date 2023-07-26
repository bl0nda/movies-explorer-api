const moviesRouter = require('express').Router();

const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');

const { movieIdValidation, createMovieValidation } = require('../middlewares/validate');

moviesRouter.get('/movies', getMovies);

moviesRouter.delete('/movies/:movieId', movieIdValidation, deleteMovie);

moviesRouter.post('/movies', createMovieValidation, createMovie);

module.exports = moviesRouter;
