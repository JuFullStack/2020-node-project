import React from "react";
import { useAsync } from "react-async";
import { getMovie } from "./api2";

function Movie2({ id }) {
  const { data: movie, error, isloading } = useAsync({
    promiseFn: getMovie,
    id,
    watch: id,
  });

  if (isloading) return <div>로딩중...</div>;
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

export default Movie2;
