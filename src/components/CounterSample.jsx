import { useCounter } from "../hooks/useCounter";

function CounterSample() {
  const { count, add, minus, reset } = useCounter(0);
  return (
    <div>
      <h1>CounterSample</h1>
      <h2>카운터 : {count}</h2>
      <button onClick={add}>증가</button>
      <button onClick={minus}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default CounterSample;
