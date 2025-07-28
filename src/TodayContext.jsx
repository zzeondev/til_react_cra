// 1. 초기값

import { createContext, useReducer } from "react";

// [ {id:날짜, text:할일, completed:true} ]
const initializeTodos = [];

// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: new Date(), text: action.payload, completed: false },
      ];
    case "delete":
      return state.filter(item => item.id !== action.payload);
    case "toggle":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

// 3. 컨텍스트 변수
export const TodayContext = createContext(null);

// 4. Provider 생성 및 적용
export const TodayContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initializeTodos);
  return (
    <TodayContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodayContext.Provider>
  );
};
