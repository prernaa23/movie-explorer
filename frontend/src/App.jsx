import React, { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { fetchMoviesByTitle } from "./api";

const App = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const data = await fetchMoviesByTitle(title);
    setMovies(data);
  };

  useEffect(() => {
    if (title != "") {
      handleSearch(title);
    }
  }, [title]);

  return (
    <>
      <Navbar title={title} setTitle={setTitle}  />
      {title === "" ? <Home /> : <MovieList movies={movies} />}
    </>
  );
};

export default App;

