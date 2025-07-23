import { createContext, useState } from "react";

export const UserThemContext = createContext();
export const UserThemeProvider = ({ children }) => {
  const [bg, setBg] = useState("#ffffff");
  return (
    <UserThemContext.Provider value={{ bg, setBg }}>
      {children}
    </UserThemContext.Provider>
  );
};
