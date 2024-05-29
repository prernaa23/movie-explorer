const express = require("express");
const {
  getMoviesByTitle,
  getPopularMovies,
  getMovieById,
} = require("../controllers/movie");

const router = express.Router();

router.get("/", getMoviesByTitle);
router.get("/popular", getPopularMovies);
router.get("/:id", getMovieById);

module.exports = router;
