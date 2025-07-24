import { createContext, useEffect, useReducer, useState } from "react";
// 1. 초기값
const initialState = "happy";
// 2. 리듀서함수
function reducer(state, action) {
  switch (action.type) {
    case "HAPPY":
      return "happy";
    case "SAD":
      return "sad";
    case "ANGRY":
      return "angry";
    case "INIT":
      return action.payload;
    default:
      return state;
  }
}
export const EmotionContext = createContext();
export const EmotionContextProvider = ({ children }) => {
  // js 자리
  const [emotion, dispatch] = useReducer(reducer, initialState);
  // 등록이 가능여부를 관리
  const [isSelected, setIsSelected] = useState(false);

  // 날짜를 생성하는 함수 : 2025-07-24 생성
  const getTodayKey = () => {
    return new Date().toISOString().slice(0, 10);
  };

  useEffect(() => {
    const result = localStorage.getItem("emotionDay");
    if (result) {
      // { date: "2025-07-24", emotion: "happy"}
      // JSON.parse 는 js 로 변환하기
      const { date, emotion } = JSON.parse(result);

      // 오늘 날짜를 읽어옮 : 2025-07-24
      const today = getTodayKey();
      // 오늘 날짜와 json 으로 불러온 날짜가 같다면.
      if (date === today) {
        dispatch({ type: "INIT", payload: emotion });
        setIsSelected(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isSelected) {
      const today = getTodayKey();
      // { date: "2025-07-24", emotion: "happy"}
      localStorage.setItem(
        "emotionDay",
        JSON.stringify({ date: today, emotion: emotion }),
      );
      // 셋팅 끝났으니까 버튼 비활성화
      setIsSelected(true);
    }
  }, [emotion, isSelected]);
  // jsx 자리
  return (
    // isSelected 를 추가해서 전달함.
    <EmotionContext.Provider
      value={{ emotion, dispatch, isSelected, setIsSelected }}
    >
      {children}
    </EmotionContext.Provider>
  );
};
