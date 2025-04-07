import { View } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import { AtForm, AtInput, AtButton } from "taro-ui"
import "./index.scss";

export default function Login() {
  const [username, setUsername] = useState("xmy");
  const [password, setPassword] = useState("111");

  const handleLogin = () => {
    if (!username || !password) {
      Taro.showToast({
        title: "请输入用户名和密码",
        icon: "none",
      });
      return;
    }
    //这里模拟登录成功
    Taro.setStorageSync("isLoggedIn", true);
    Taro.setStorageSync("username", username);
    //设置头像URL
    Taro.setStorageSync(
      "avatarUrl",
      "https://public-cdn-oss.mosoteach.cn/avatar/2022/79/dc5660af2eefff104751b1ee4f130a20.jpg?v=1662370167&x-oss-process=style/s300x300"
    );

    //触发登录成功事件
    Taro.eventCenter.trigger('loginSuccess');

    Taro.showModal({
      title: "登录成功",
      icon: "success",
      success: () => {
        console.log("登录成功");
        Taro.switchTab({
          url: "/pages/index/index",
        })
      },
    });
  };

  return (
    <View className="login">
      <AtForm className="login-form">
        <AtInput
          name="username"
          title="用户名"
          type="text"
          placeholder="请输入用户名"
          value={username}
          onChange={setUsername}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
        <AtButton type="primary" className="login-btn" onClick={handleLogin}>
          登录
        </AtButton>
      </AtForm>
    </View>
  );
}

