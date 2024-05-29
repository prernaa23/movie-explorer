const axios = require("axios");

const getMoviesByTitle = async (req, res) => {
  const { title } = req.query;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: title,
        },
      }
    );

    if (response.data.results.length > 0) {
      const movies = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
        synopsis: movie.overview,
        poster: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "N/A",
      }));
      res.json(movies);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getPopularMovies = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    if (response.data.results.length > 0) {
      const movies = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
        synopsis: movie.overview,
        poster: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "N/A",
      }));
      res.json(movies);
    } else {
      res.status(404).json({ message: "No popular movies found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    if (response.data) {
      const movie = {
        id: response.data.id,
        title: response.data.title,
        year: response.data.release_date
          ? response.data.release_date.split("-")[0]
          : "N/A",
        genre: response.data.genres.map((genre) => genre.name),
        synopsis: response.data.overview,
        poster: response.data.poster_path
          ? `https://image.tmdb.org/t/p/w500${response.data.poster_path}`
          : "N/A",
        rating: response.data.vote_average,
      };
      res.json(movie);
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getMoviesByTitle,
  getPopularMovies,
  getMovieById,
};
