import React, { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>함수 실행</button>
      <Child />
    </div>
  );
}

export default App;
