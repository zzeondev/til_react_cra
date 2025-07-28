// 2. Provider 생성

import { useReducer } from "react";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";

// 2.1. 초기값 생성
const initialTodoState = [];
// 2.2. 리듀서 함수 생성
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      // action  = {type:"add", payload:"안녕하세요."}
      return [
        ...state,
        { id: new Date(), text: action.payload, completed: false },
      ];
    case "toggle":
      // action  = {type:"toggle", payload:아이디 }
      return state.map(item =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item,
      );
    case "delete":
      // action  = {type:"delete", payload:아이디 }
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
// 2.3. Provider 생성
export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
