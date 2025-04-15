import React, { useState } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Barcode = () => {
  const [scanResult, setScanResult] = useState(""); // 用于存储扫码结果

  // 调用扫码功能
  const handleScanCode = () => {
    Taro.scanCode({
      onlyFromCamera: false, // 是否只能从相机扫码，不允许从相册选择图片
      scanType: ["qrCode", "barCode"], // 可以扫码的类型，支持二维码和条形码
      success: (res) => {
        console.log("扫码成功", res);
        setScanResult(res.result); // 将扫码结果存储到状态中
        Taro.showToast({
          title: "扫码成功",
          icon: "success",
        });
      },
      fail: (err) => {
        console.error("扫码失败", err);
        Taro.showToast({
          title: "扫码失败",
          icon: "none",
        });
      },
    });
  };

  return (
    <View className="barcode">
      <View>
        <Button onClick={handleScanCode}>扫码</Button>
      </View>

      <View>
        <View>扫码结果：</View>
        <View>{scanResult}</View>
      </View>
    </View>
  );
};

export default Barcode;
