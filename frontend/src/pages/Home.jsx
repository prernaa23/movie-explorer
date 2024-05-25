import React from "react";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../api";
import MovieList from "../components/MovieList";
import img from "../assets/1.jpeg";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const func = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };

  useEffect(() => {
    func();
  }, []);


  return (
    <div>
      <div
        className="w-full h-[90vh] bg-center bg-no-repeat "
        style={{
          background: `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)),url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-gray-900 pt-8 pb-8">
        <div className="text-4xl font-extrabold dark:text-white h-full w-[90%] mx-auto pb-3">
          Popular & Trending...
        </div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
