import { useState } from "react";

export function useCounter(init = 0) {
  const [count, setCount] = useState(init);
  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);
  return { count, add, minus, reset };
}
