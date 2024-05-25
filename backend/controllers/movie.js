const axios = require("axios");
const Movie = require("../models/movie");

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const getMoviesByTitle = async (req, res) => {
  const { title } = req.query;
  const gId = (arr) => {};
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
        genre: "N/A", // TMDb API doesn't provide genres directly in search results
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
        genre: "N/A", // TMDb API doesn't provide genres directly in popular movies results
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

module.exports = {
  getMoviesByTitle,
  getPopularMovies,
};
