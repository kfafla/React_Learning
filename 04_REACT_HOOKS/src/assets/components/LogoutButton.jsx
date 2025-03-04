
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext1";

const LogoutButton = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return <button onClick={logout}>退出</button>;
};

export default LogoutButton;
