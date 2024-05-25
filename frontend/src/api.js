import axios from "axios";

const BASE_API_URL = "http://localhost:3000/api/movies";

export const fetchMoviesByTitle = async (title) => {
  let data = [];
  const response = await axios.get(`${BASE_API_URL}?title=${title}`);
  // console.log(response.data);
  data = response.data;
  return data;
};

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_API_URL}/popular`);
  // data = response.data;
  return response.data;
}