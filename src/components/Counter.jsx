import { useReducer } from "react";
import { countReducer } from "../modules/counter/countReducer";
import { initialState } from "../modules/counter/countInitialState";
import { add, minus, reset } from "../modules/counter/countActions";

function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>카운터 컴포넌트</h2>
      <p>현재 카운트:{state.count}</p>
      <button onClick={() => dispatch(add())}>더하기</button>
      <button onClick={() => dispatch(minus())}>빼기</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
    </div>
  );
}

export default Counter;
