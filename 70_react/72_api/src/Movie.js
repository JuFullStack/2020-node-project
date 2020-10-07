import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled Error: ${action.type}`);
  }
}

function Movie({ id }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get(`http://localhost:5000/movieList/${id}`);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const { loading, data: movie, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movie) return null;

  return (
    <>
      <h3>{movie.title}</h3>
      <div>{movie.director}</div>
      <div>{movie.year}</div>
    </>
  );
}

export default Movie;
