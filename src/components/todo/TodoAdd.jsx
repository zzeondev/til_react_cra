import { useContext, useState } from "react";
import { TodayContext } from "../../TodayContext";

function TodoAdd() {
  // todoContext 를 활용하겠다.
  const { todos, dispatch } = useContext(TodayContext);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="할일을 입력해주세요."
      />
      <button
        onClick={() => {
          dispatch({ type: "add", payload: text });
        }}
      >
        추가
      </button>
    </div>
  );
}

export default TodoAdd;
