import { createContext, useReducer } from "react";

// 1. 초기값 설정
const initialState = "white";

// 2. 리듀서 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case "YELLOW":
      return "yellow";
    case "SKYBLUE":
      return "skyblue";
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
export const ColorContext = createContext();
export const ColorContextProvider = ({ children }) => {
  // 3번 state 생성
  const [color, dispatch] = useReducer(reducer, initialState);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
