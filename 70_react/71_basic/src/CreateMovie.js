import React from "react";

function CreateMovie({ title, director, year, onChange, onCreate }) {
  return (
    <>
      <input
        name="title"
        placeholder="영화명"
        onChange={onChange}
        value={title}
      ></input>
      <input
        name="director"
        placeholder="감독명"
        onChange={onChange}
        value={director}
      ></input>
      <input
        name="year"
        placeholder="개봉연도"
        onChange={onChange}
        value={year}
      ></input>
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default CreateMovie;
