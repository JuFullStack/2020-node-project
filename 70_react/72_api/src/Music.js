import React, { useReducer, useEffect } from "react";
import axios from "axios";

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

function Music({ id }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (id) => {
    dispatch({ type: "LOADING" });
    try {
      // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
      const response = await axios.get(`http://localhost:5000/musicList/${id}`);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e.response.status);
      dispatch({ type: "ERROR", error: e });
    }
  };

  // 화면에 마운트 될 경우 실행
  useEffect(() => {
    fetchData(id);
  }, [id]);

  const { loading, data: music, error } = state;

  if (loading) return <div>로딩중...</div>;
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

export default Music;
