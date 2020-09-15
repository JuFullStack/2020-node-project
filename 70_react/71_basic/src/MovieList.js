import React from "react";

function Movie({ movie, onRemove, onToggle }) {
  const { id, title, director, year, active } = movie;
  const style = {
    color: active ? "blue" : "black",
    cursor: "Pointer",
  };
  return (
    <>
      <div>
        <b onClick={() => onToggle(id)} style={style}>
          {title}
        </b>
        ({director}, {year})<button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </>
  );
}

function MovieList({ movieList, onRemove, onToggle }) {
  return (
    <>
      {movieList.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onRemove={onRemove}
          onToggle={onToggle}
        ></Movie>
      ))}
    </>
  );
}

export default MovieList;
