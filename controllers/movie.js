const Movie = require('../models/movie');

const ValidationError = require('../errors/validation-err');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

module.exports.getMovies = (req, res, next) => {
  Movie
    .find({ owner: req.user._id })
    .then((movie) => res.send(movie))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie
    .findOne({ movieId })
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм не найден');
      }
      if (movie.owner.toString() !== req.user._id) {
        console.log(movie.owner, req.user._id);
        throw new ForbiddenError('Нельзя удалять чужой фильм.');
      }
      return Movie.findByIdAndRemove(movie._id)
        .then((obj) => {
          res.status(200).send(obj);
        });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        console.log(err);
        return next(new ValidationError('Введены некорректные данные'));
      }
      return next(err);
    });
};

module.exports.createMovie = (req, res, next) => {
  const {
    nameRU,
    nameEN,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
  } = req.body;
  Movie
    .create({
      nameRU,
      nameEN,
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      owner: req.user._id,
    })
    .then((movie) => res.status(201).send(movie))
    // .then(() => console.log(req.user._id))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.log(err);
        return next(new ValidationError('Введены некорректные данные'));
      }
      return next(err);
    });
};
