import React, { useEffect, useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Service = () => {
  const [motionData, setMotionData] = useState(null); // 用于存储设备运动数据

  // 开始监听设备运动
  const handleStartDeviceMotionListening = () => {
    Taro.startDeviceMotionListening({
      success: () => {
        console.log("设备运动监听已启动");
        Taro.showToast({
          title: "设备运动监听已启动",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("启动设备运动监听失败", err);
        Taro.showToast({
          title: "启动失败",
          icon: "none",
        });
      },
    });
  };

  // 停止监听设备运动
  const handleStopDeviceMotionListening = () => {
    Taro.stopDeviceMotionListening({
      success: () => {
        console.log("设备运动监听已停止");
        Taro.showToast({
          title: "设备运动监听已停止",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("停止设备运动监听失败", err);
        Taro.showToast({
          title: "停止失败",
          icon: "none",
        });
      },
    });
  };

  // 监听设备运动变化
  useEffect(() => {
    const handleDeviceMotionChange = (res) => {
      setMotionData(res);
      console.log("设备运动数据变化", res);
    };

    Taro.onDeviceMotionChange(handleDeviceMotionChange);

    // 清理函数
    return () => {
      Taro.offDeviceMotionChange(handleDeviceMotionChange);
    };
  }, []);

  return (
    <View className="service">
      <View>
        <Button onClick={handleStartDeviceMotionListening}>
          开始监听设备运动
        </Button>
        <Button onClick={handleStopDeviceMotionListening}>
          停止监听设备运动
        </Button>
      </View>

      <View>
        <Text>设备运动数据：</Text>
        {motionData ? (
          <View>
            <Text>加速度 X: {motionData.acceleration.x.toFixed(2)}</Text>
            <Text>加速度 Y: {motionData.acceleration.y.toFixed(2)}</Text>
            <Text>加速度 Z: {motionData.acceleration.z.toFixed(2)}</Text>
            <Text>旋转角度 alpha: {motionData.rotation.alpha.toFixed(2)}</Text>
            <Text>旋转角度 beta: {motionData.rotation.beta.toFixed(2)}</Text>
            <Text>旋转角度 gamma: {motionData.rotation.gamma.toFixed(2)}</Text>
          </View>
        ) : (
          <Text>暂无数据</Text>
        )}
      </View>
    </View>
  );
};

export default Service;
