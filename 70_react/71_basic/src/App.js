// JSX 규칙
// 1. 여는 태그와 닫는 태그가 꼭 있어야 함 </>도 가능
// 2. 2개 이상의 태그는 반드시 부모 태그로 감싸져야 함
// 3. JSX 내부에서 자바스크립트 사용 시 {} 이용
// 4.
// 5.
// 6. 주석 작성

import React from "react";
import Hello from "./Hello";
import Hello2 from "./Hello2";
import "./App.css";

function App() {
  const name = "React";
  const style = {
    backgroundColor: "yellow",
    color: "blue",
    fontSize: 30,
  };

  return (
    <>
      {name}
      <Hello />
      <div style={style}>
        <Hello />
        {name}
      </div>
      <div class="box"></div> {/*warning 발생*/}
      <div className="box"></div>
      <Hello name="홍길동" color="red"></Hello>
      <Hello2 />
    </>
  );
}

export default App;
