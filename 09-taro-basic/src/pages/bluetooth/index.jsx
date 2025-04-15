import React, { useState, useEffect } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Bluetooth = () => {
  const [bluetoothAdapterState, setBluetoothAdapterState] = useState(null);
  const [devices, setDevices] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState([]);

  useEffect(() => {
    // 初始化蓝牙适配器
    Taro.openBluetoothAdapter({
      success: (res) => {
        console.log("蓝牙适配器初始化成功", res);
        setBluetoothAdapterState(res);
        Taro.onBluetoothAdapterStateChange((state) => {
          console.log("蓝牙适配器状态变化", state);
          setBluetoothAdapterState(state);
        });
      },
      fail: (err) => {
        console.error("蓝牙适配器初始化失败", err);
      },
    });

    // 清理函数
    return () => {
      Taro.offBluetoothAdapterStateChange();
    };
  }, []);

  const startDiscovery = () => {
    Taro.startBluetoothDevicesDiscovery({
      services: [], // 可以指定需要搜索的蓝牙服务的UUID
      allowDuplicatesKey: false,
      interval: 0,
      success: (res) => {
        console.log("开始搜索蓝牙设备成功", res);
        Taro.onBluetoothDeviceFound((devices) => {
          console.log("发现蓝牙设备", devices);
          setDevices(devices.devices);
        });
      },
      fail: (err) => {
        console.error("开始搜索蓝牙设备失败", err);
      },
    });
  };

  const stopDiscovery = () => {
    Taro.stopBluetoothDevicesDiscovery({
      success: (res) => {
        console.log("停止搜索蓝牙设备成功", res);
      },
      fail: (err) => {
        console.error("停止搜索蓝牙设备失败", err);
      },
    });
  };

  const connectToDevice = (deviceId) => {
    Taro.createBLEConnection({
      deviceId,
      success: (res) => {
        console.log("连接蓝牙设备成功", res);
        Taro.getConnectedBluetoothDevices({
          success: (res) => {
            console.log("获取已连接的蓝牙设备成功", res);
            setConnectedDevices(res.devices);
          },
          fail: (err) => {
            console.error("获取已连接的蓝牙设备失败", err);
          },
        });
      },
      fail: (err) => {
        console.error("连接蓝牙设备失败", err);
      },
    });
  };

  const disconnectFromDevice = (deviceId) => {
    Taro.closeBLEConnection({
      deviceId,
      success: (res) => {
        console.log("断开蓝牙设备连接成功", res);
        Taro.getConnectedBluetoothDevices({
          success: (res) => {
            console.log("获取已连接的蓝牙设备成功", res);
            setConnectedDevices(res.devices);
          },
          fail: (err) => {
            console.error("获取已连接的蓝牙设备失败", err);
          },
        });
      },
      fail: (err) => {
        console.error("断开蓝牙设备连接失败", err);
      },
    });
  };

  const closeBluetoothAdapter = () => {
    Taro.closeBluetoothAdapter({
      success: (res) => {
        console.log("关闭蓝牙适配器成功", res);
      },
      fail: (err) => {
        console.error("关闭蓝牙适配器失败", err);
      },
    });
  };

  return (
    <View className="bluetooth">
      <View>
        <Button onClick={startDiscovery}>开始搜索蓝牙设备</Button>
        <Button onClick={stopDiscovery}>停止搜索蓝牙设备</Button>
        <Button onClick={closeBluetoothAdapter}>关闭蓝牙适配器</Button>
      </View>

      <View>
        <View>已发现的蓝牙设备：</View>
        {devices.map((device) => (
          <View key={device.deviceId}>
            {device.name} - {device.deviceId}
            <Button onClick={() => connectToDevice(device.deviceId)}>
              连接
            </Button>
          </View>
        ))}
      </View>

      <View>
        <View>已连接的蓝牙设备：</View>
        {connectedDevices.map((device) => (
          <View key={device.deviceId}>
            {device.name} - {device.deviceId}
            <Button onClick={() => disconnectFromDevice(device.deviceId)}>
              断开连接
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Bluetooth;
