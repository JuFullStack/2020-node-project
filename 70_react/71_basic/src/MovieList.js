import React from "react";

function Movie({ movie, onRemove }) {
  const { id, title, director, year } = movie;
  return (
    <>
      <div>
        <b>{title}</b>({director}, {year})
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </>
  );
}

function MovieList({ movieList, onRemove }) {
  return (
    <>
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} onRemove={onRemove}></Movie>
      ))}
    </>
  );
}

export default MovieList;
