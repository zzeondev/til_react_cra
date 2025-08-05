import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // window.addEventListener("속성", 실행할콜백함수);
    window.addEventListener("resize", handleResize);
    // 클린업 함수 (컴포넌트가 사라지면 자동실행되는 함수)
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return size;
}
