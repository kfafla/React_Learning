import React, { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Screen = () => {
  const [brightness, setBrightness] = useState(0.5); // 初始屏幕亮度

  // 截屏功能
  const handleCaptureScreen = () => {
    Taro.authorize({
      scope: "scope.screenCapture",
      success() {
        Taro.getFileSystemManager().saveFile({
          tempFilePath: "/system/capture/screen",
          success(res) {
            console.log("截屏成功，文件路径:", res.savedFilePath);
            Taro.showToast({
              title: "截屏成功",
              icon: "success",
            });
          },
          fail(err) {
            console.error("截屏失败", err);
            Taro.showToast({
              title: "截屏失败",
              icon: "none",
            });
          },
        });
      },
      fail(err) {
        console.error("授权失败", err);
        Taro.showToast({
          title: "授权失败",
          icon: "none",
        });
      },
    });
  };

  // 设置屏幕亮度
  const handleSetBrightness = () => {
    Taro.setScreenBrightness({
      value: brightness,
      success: () => {
        Taro.showToast({
          title: "设置成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("设置屏幕亮度失败", err);
        Taro.showToast({
          title: "设置失败",
          icon: "none",
        });
      },
    });
  };

  // 获取屏幕亮度
  const handleGetBrightness = () => {
    Taro.getScreenBrightness({
      success: (res) => {
        setBrightness(res.value);
        Taro.showToast({
          title: `当前亮度: ${res.value}`,
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("获取屏幕亮度失败", err);
        Taro.showToast({
          title: "获取失败",
          icon: "none",
        });
      },
    });
  };

  return (
    <View className="screen">
      <View>
        <Button onClick={handleCaptureScreen}>截屏</Button>
        <Button onClick={handleGetBrightness}>获取屏幕亮度</Button>
        <Button onClick={handleSetBrightness}>设置屏幕亮度</Button>
      </View>

      <View>
        <Text>当前屏幕亮度: {brightness}</Text>
        <View>
          <Button onClick={() => setBrightness(Math.max(0, brightness - 0.1))}>
            -
          </Button>
          <Button onClick={() => setBrightness(Math.min(1, brightness + 0.1))}>
            +
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Screen;
