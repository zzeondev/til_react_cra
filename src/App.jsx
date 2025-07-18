import React, { useCallback, useState } from "react";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
