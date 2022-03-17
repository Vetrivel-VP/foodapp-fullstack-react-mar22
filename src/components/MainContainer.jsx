import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";

const MainContainer = () => {
  const { user, setUser } = useContext(UserContext);

  return <div>MainContainer {user ? user.displayName : "No user"}</div>;
};

export default MainContainer;
