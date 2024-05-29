import axios from "axios";

const BASE_API_URL = "https://movie-explorer-uq10.onrender.com/api/movies";

export const fetchMoviesByTitle = async (title) => {
  let data = [];
  const response = await axios.get(`${BASE_API_URL}?title=${title}`);
  data = response.data;
  return data;
};
export const fetchMovieById = async (id) => {
  const response = await axios.get(`${BASE_API_URL}/${id}`);
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_API_URL}/popular`);
  return response.data;
}