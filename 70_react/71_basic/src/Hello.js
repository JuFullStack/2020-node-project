import React from "react";

function Hello(props) {
  return (
    <>
      <div>Hello React!</div>
      <div style={{ color: props.color }}>Hello! {props.name}</div>
      {/*스타일 자리에는 중괄호 두개*/}
    </>
  );
}

export default Hello;
