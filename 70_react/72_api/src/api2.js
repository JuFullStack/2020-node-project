import axios from "axios";

export const getMovieList = async () => {
  const response = await axios.get("http://localhost:5000/movieList");
  return response.data;
};

export const getMovie = async ({ id }) => {
  const response = await axios.get(`http://localhost:5000/movieList/${id}`);
  return response.data;
};
