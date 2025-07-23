import { createContext, useState } from "react";

// context : 리액트용 글로벌 변수
export const UserInfoContext = createContext();
// Provider : 리액트용 글로벌 변수를 사용하는 JSX
export const UserInfoProvider = ({ children }) => {
  // js 자리
  // 사용자 정보를 위한 리액트변수
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userRole: "GUEST",
  });
  // jsx 자리
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
