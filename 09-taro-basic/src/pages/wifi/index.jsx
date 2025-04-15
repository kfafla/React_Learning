import React, { useState, useEffect } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Wifi = () => {
  const [wifiList, setWifiList] = useState([]);
  const [connectedWifi, setConnectedWifi] = useState(null);

  useEffect(() => {
    // 初始化 WiFi
    Taro.startWifi({
      success: (res) => {
        console.log("WiFi 初始化成功", res);
      },
      fail: (err) => {
        console.error("WiFi 初始化失败", err);
      },
    });

    // 获取已连接的 WiFi
    Taro.getConnectedWifi({
      success: (res) => {
        console.log("获取已连接的 WiFi 成功", res);
        setConnectedWifi(res.wifi);
      },
      fail: (err) => {
        console.error("获取已连接的 WiFi 失败", err);
      },
    });

    // 监听 WiFi 列表获取事件
    Taro.onGetWifiList((wifiList) => {
      console.log("获取到 WiFi 列表", wifiList);
      setWifiList(wifiList.wifiList);
    });

    // 监听 WiFi 连接事件
    Taro.onWifiConnected((wifi) => {
      console.log("连接到 WiFi", wifi);
      setConnectedWifi(wifi.wifi);
    });

    // 清理函数
    return () => {
      Taro.offGetWifiList();
      Taro.offWifiConnected();
    };
  }, []);

  const startWifi = () => {
    Taro.startWifi({
      success: (res) => {
        console.log("WiFi 初始化成功", res);
      },
      fail: (err) => {
        console.error("WiFi 初始化失败", err);
      },
    });
  };

  const stopWifi = () => {
    Taro.stopWifi({
      success: (res) => {
        console.log("WiFi 停止成功", res);
      },
      fail: (err) => {
        console.error("WiFi 停止失败", err);
      },
    });
  };

  const connectToWifi = (wifi) => {
    Taro.connectWifi({
      SSID: wifi.SSID,
      BSSID: wifi.BSSID,
      success: (res) => {
        console.log("连接 WiFi 成功", res);
        setConnectedWifi(res.wifi);
      },
      fail: (err) => {
        console.error("连接 WiFi 失败", err);
      },
    });
  };

  const getWifiList = () => {
    Taro.getWifiList({
      success: (res) => {
        console.log("获取 WiFi 列表成功", res);
      },
      fail: (err) => {
        console.error("获取 WiFi 列表失败", err);
      },
    });
  };

  return (
    <View className="wifi">
      <View>
        <Button onClick={startWifi}>启动 WiFi</Button>
        <Button onClick={stopWifi}>停止 WiFi</Button>
        <Button onClick={getWifiList}>获取 WiFi 列表</Button>
      </View>

      <View>
        <View>已连接的 WiFi：</View>
        {connectedWifi ? (
          <View>
            {connectedWifi.SSID} - {connectedWifi.BSSID}
          </View>
        ) : (
          <View>未连接到任何 WiFi</View>
        )}
      </View>

      <View>
        <View>可连接的 WiFi 列表：</View>
        {wifiList.map((wifi) => (
          <View key={wifi.SSID}>
            {wifi.SSID} - {wifi.BSSID}
            <Button onClick={() => connectToWifi(wifi)}>连接</Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Wifi;
