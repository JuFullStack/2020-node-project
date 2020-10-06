import React, { useReducer, useEffect } from "react";
import axios from "axios";

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
        ...state,
        data: action.data,
      };
    case "ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function musicList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = () => {
    dispatch({ type: "LOADING" });
    try {
      // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
      const response = axios.get("localhost:5000/musicList");
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

  const { loading, musicList, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  // musicList에서 배열 값 렌더링
  return <></>;
}

export default musicList;
