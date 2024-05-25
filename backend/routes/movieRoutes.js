const express = require("express");
const {
  getMoviesByTitle,
  getPopularMovies,
  getMoviesById,
} = require("../controllers/movie");

const router = express.Router();

router.get("/", getMoviesByTitle);
router.get("/popular", getPopularMovies);

module.exports = router;
