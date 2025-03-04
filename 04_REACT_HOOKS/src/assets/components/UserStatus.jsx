import React, { useContext } from "react";
import { UserContext } from "../context/UserContext1";

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return <div>{user ? <p>当前用户: {user.username}</p> : <p>未登录</p>}</div>;
};

export default UserStatus;
