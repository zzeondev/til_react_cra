import { createContext, useState } from "react";

export const UserBucketContext = createContext();
export const UserBucketProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState([]);
  return (
    <UserBucketContext.Provider value={{ bucketList, setBucketList }}>
      {children}
    </UserBucketContext.Provider>
  );
};
