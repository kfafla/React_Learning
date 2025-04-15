import React, { useState } from "react";
import { View, Button, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Clipboard = () => {
  const [inputValue, setInputValue] = useState(""); // 输入框的值
  const [clipboardData, setClipboardData] = useState(""); // 剪贴板的内容

  // 设置剪贴板内容
  const handleSetClipboardData = () => {
    if (inputValue.trim() === "") {
      Taro.showToast({
        title: "请输入内容",
        icon: "none",
      });
      return;
    }

    Taro.setClipboardData({
      data: inputValue,
      success: () => {
        Taro.showToast({
          title: "设置成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("设置剪贴板失败", err);
        Taro.showToast({
          title: "设置失败",
          icon: "none",
        });
      },
    });
  };

  // 获取剪贴板内容
  const handleGetClipboardData = () => {
    Taro.getClipboardData({
      success: (res) => {
        setClipboardData(res.data);
        Taro.showToast({
          title: "获取成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("获取剪贴板失败", err);
        Taro.showToast({
          title: "获取失败",
          icon: "none",
        });
      },
    });
  };

  return (
    <View className="clipboard">
      <View>
        <Input
          type="text"
          placeholder="请输入内容"
          value={inputValue}
          onInput={(e) => setInputValue(e.detail.value)}
        />
      </View>

      <View>
        <Button onClick={handleSetClipboardData}>设置剪贴板内容</Button>
        <Button onClick={handleGetClipboardData}>获取剪贴板内容</Button>
      </View>

      <View>
        <View>剪贴板内容：</View>
        <View>{clipboardData}</View>
      </View>
    </View>
  );
};

export default Clipboard;
