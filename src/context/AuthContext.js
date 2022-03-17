import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ value, children }) => {
  const [user, setUser] = useState(value);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
