import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../api";
import img from "../assets/1.jpeg";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="flex font-sans justify-center place-content-center align-middle h-full w-full bg-gray-900 md:p-20">
      <div className=" mt-10 mb-10 flex flex-col w-full h-full  md:flex-row md:max-w-[60vw] md:h-auto ">
        <img
          className="object-cover w-full h-auto md:h-auto md:w-[22vw]"
          src={movie.poster}
          alt={movie.title}
        />
        <div className="flex px-10 flex-col gap-2 p-4 leading-normal">
          <h5 className="mb-2 uppercase tracking-wider text-3xl font-semibold text-gray-900 dark:text-white">
            {movie.title}
          </h5>

          <div>
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-[#f4c2c2] border border-[#f4c2c2]">
              {movie.year}
            </span>
          </div>
          <div>
            {movie.genre.map((name) => (
              <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-[#f4c2c2] border border-[#f4c2c2]">
                {name}
              </span>
            ))}
          </div>

          <div></div>
          <p className="mb-3 font-normal capitalize text-[#f4c2c2] text-xl text-justify ">
            {movie.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
