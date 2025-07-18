import React, { useRef } from "react";

function App() {
  const countRef = useRef(0);
  const incre = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <div>
      <h1>값 보관 및 저장 {countRef.current}</h1>
      <button onClick={incre}>증가</button>
    </div>
  );
}

export default App;
