import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import Music from "./Music";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// LOADING, SUCCESS, ERROR
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
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function MusicList() {
  const [id, setId] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
      const response = await axios.get("http://localhost:5000/musicList");
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  // 화면에 마운트 될 경우 실행
  useEffect(() => {
    fetchData();
  }, []);

  const { loading, data: musicList, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musicList) return null;
  //return <button onClick={fetchData}>불러오기</button>;

  // musicList에서 배열 값 렌더링
  return (
    <>
      <ul>
        {musicList.map((music) => (
          <li
            key={music.id}
            onClick={() => setId(music.id)}
            style={{ cursor: "pointer" }}
          >
            {music.title} ({music.singer})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>불러오기</button>
      {id && <Music id={id}></Music>}
    </>
  );
}

export default MusicList;
