
import React from "react";
import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap items-center justify-center place-content-center pt-5 bg-gray-900 pb-10 ">
      <div className="h-full w-[90%] mx-auto grid grid-cols-3 md:grid-cols-5 gap-[3vw]">
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.id}`}>
            <div>
              <img
                className="md:h-80 h-70  rounded-lg"
                src={movie.poster}
                alt={movie.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
