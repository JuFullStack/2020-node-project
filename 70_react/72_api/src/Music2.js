import React from "react";
import { useAsync } from "react-async";
import { getMusic } from "./api";

function Music2({ id }) {
  const { data: music, error, isloading } = useAsync({
    promiseFn: getMusic,
    id,
    watch: id, // id가 바뀌면 다시 호출
  });

  if (isloading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!music) return null;
  //return <button onClick={fetchData}>불러오기</button>;

  // musicList에서 배열 값 렌더링
  return (
    <>
      <h1>{music.title} </h1>
      <h2>({music.singer})</h2>
    </>
  );
}

export default Music2;
