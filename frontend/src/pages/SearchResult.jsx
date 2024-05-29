import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMoviesByTitle } from "../api";
import MovieList from "../components/MovieList";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("title");

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const data = await fetchMoviesByTitle(query);
        setMovies(data);
      }
    };
    fetchMovies();
  }, [query]);

  return <MovieList movies={movies} />;
};

export default SearchResult;
