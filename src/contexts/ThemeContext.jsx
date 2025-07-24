import { createContext, useEffect, useReducer } from "react";

// 1 번 초기값
const initialState = "light";

// 2 번 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const nowTheme = state === "light" ? "dark" : "light";
      // 글자보관
      localStorage.setItem("theme", nowTheme);
      return nowTheme;
    case "INIT":
      return action.payload || "light";
    default:
      return state;
  }
}

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  // js 자리
  // 3 번
  const [theme, dispatch] = useReducer(reducer, initialState);

  // 최초로 localStorage 에서 값 읽어들임
  useEffect(() => {
    const result = localStorage.getItem("theme");
    dispatch({ type: "INIT", payload: result });
  }, []);
  // jsx 자리
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
