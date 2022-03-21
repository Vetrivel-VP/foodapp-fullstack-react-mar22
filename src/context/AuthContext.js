import React, { createContext, useContext, useState } from "react";
import { fetchUser } from "../utils/fetchUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userInfo = fetchUser();

  const [user, setUser] = useState(userInfo);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
