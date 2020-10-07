import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

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

function MovieList() {
  const [id, setId] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get("http://localhost:5000/movieList");
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, data: movieList, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!movieList) return null;

  return (
    <>
      <ul>
        {movieList.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setId(movie.id)}
            style={{ cursor: "pointer" }}
          >
            {movie.title} ({movie.director}, {movie.year})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>불러오기</button>
      {id && <Movie id={id}></Movie>}
    </>
  );
}

export default MovieList;
