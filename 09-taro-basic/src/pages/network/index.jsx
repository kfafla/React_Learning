import React, { useEffect, useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Network = () => {
  const [networkType, setNetworkType] = useState("未知");
  const [localIPAddress, setLocalIPAddress] = useState("未知");
  const [isNetworkWeak, setIsNetworkWeak] = useState(false);

  useEffect(() => {
    // 获取当前网络类型
    Taro.getNetworkType({
      success: (res) => {
        setNetworkType(res.networkType);
      },
    });

    // 获取本地 IP 地址
    Taro.getLocalIPAddress({
      success: (res) => {
        setLocalIPAddress(res.localIP);
      },
    });

    // 监听网络状态变化
    Taro.onNetworkStatusChange((res) => {
      setNetworkType(res.networkType);
      setIsNetworkWeak(res.isNetworkWeak);
    });

    // 监听弱网变化
    Taro.onNetworkWeakChange((res) => {
      setIsNetworkWeak(res.isNetworkWeak);
    });

    // 清理函数
    return () => {
      Taro.offNetworkStatusChange();
      Taro.offNetworkWeakChange();
    };
  }, []);

  return (
    <View className="network">
      <View>
        <Text>当前网络类型: {networkType}</Text>
        <Text>本地 IP 地址: {localIPAddress}</Text>
        <Text>网络状态: {isNetworkWeak ? "弱网" : "正常"}</Text>
      </View>
    </View>
  );
};

export default Network;
