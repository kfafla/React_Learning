import React from "react";
import { View, Navigator } from "@tarojs/components";

import "./index.scss";

const Test = () => {
  return (
    <View className="discover-container">
      <Navigator url="/pages/basic/index" className="nav-item">
        基础内容
      </Navigator>
      <Navigator url="/pages/contact/index" className="nav-item">
        contact
      </Navigator>
      <Navigator url="/pages/container/index" className="nav-item">
        container
      </Navigator>
      <Navigator url="/pages/device/index" className="nav-item">
        设备
      </Navigator>
      <Navigator url="/pages/form/index" className="nav-item">
        表单组件
      </Navigator>
      <Navigator url="/pages/location/index" className="nav-item">
        定位
      </Navigator>
      <Navigator url="/pages/map/index" className="nav-item">
        地图
      </Navigator>
      <Navigator url="/pages/media/index" className="nav-item">
        媒体组件
      </Navigator>
      <Navigator url="/pages/skyline/index" className="nav-item">
        skyline
      </Navigator>
      <Navigator url="/pages/webview/index" className="nav-item">
        webview
      </Navigator>
      <Navigator url="/pages/bluetooth/index" className="nav-item">
        蓝牙
      </Navigator>
      <Navigator url="/pages/wifi/index" className="nav-item">
        wifi
      </Navigator>
      <Navigator url="/pages/clipboard/index" className="nav-item">
        剪贴板
      </Navigator>
      <Navigator url="/pages/barcode/index" className="nav-item">
        扫码
      </Navigator>
      <Navigator url="/pages/screen/index" className="nav-item">
        屏幕
      </Navigator>
      <Navigator url="/pages/network/index" className="nav-item">
        网络
      </Navigator>
      <Navigator url="/pages/Keyboard/index" className="nav-item">
        键盘
      </Navigator>
      <Navigator url="/pages/service/index" className="nav-item">
        设备方向
      </Navigator>
    </View>
  );
};

export default Test;
