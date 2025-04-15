import React, { useState } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import { GridView, ListView } from "@tarojs/components";
import "./index.scss";

const SkylinePage = () => {
  // GridView 数据
  const gridData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `项目 ${i + 1}`,
    color: `hsl(${(i * 20) % 360}, 70%, 70%)`,
  }));

  // ListView 数据
  const listData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `列表项 ${i + 1}`,
    desc: `这是第 ${i + 1} 个列表项的描述信息`,
  }));

  // 状态管理
  const [message, setMessage] = useState("");

  // 双击事件
  const [lastTouchTime, setLastTouchTime] = useState(0);
  const handleDoubleTap = (e) => {
    const currentTime = Date.now();
    if (currentTime - lastTouchTime < 300) {
      setMessage("Double tap detected");
      setTimeout(() => setMessage(""), 2000); // 2秒后清除消息
    }
    setLastTouchTime(currentTime);
  };

  // 长按事件
  const [longPressTimer, setLongPressTimer] = useState(null);
  const handleLongPressStart = (e) => {
    const timer = setTimeout(() => {
      setMessage("Long press detected");
      setTimeout(() => setMessage(""), 2000); // 2秒后清除消息
    }, 500);
    setLongPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  // 水平拖动事件
  const [startX, setStartX] = useState(0);
  const handleHorizontalDragStart = (e) => {
    setStartX(e.touches[0].pageX);
  };

  const handleHorizontalDragMove = (e) => {
    const currentX = e.touches[0].pageX;
    const deltaX = currentX - startX;
    setMessage(`Horizontal drag: ${deltaX}px`);
    setTimeout(() => setMessage(""), 2000); // 2秒后清除消息
  };

  return (
    <View className="skyline-page">
      <ScrollView className="scroll-view" scrollY>
        <View className="sticky-header">
          <Text className="sticky-header-title">吸顶头部</Text>
        </View>
        <View className="section">
          <Text className="section-title">GridView 组件</Text>
          <GridView
            className="grid-view"
            crossAxisCount={4}
            crossAxisGap={20}
            mainAxisGap={20}
          >
            {gridData.map((item) => (
              <View
                key={item.id}
                className="grid-item"
                style={{ backgroundColor: item.color }}
                onTouchStart={(e) => {
                  handleDoubleTap(e);
                  handleLongPressStart(e);
                }}
                onTouchEnd={handleLongPressEnd}
                onTouchMove={(e) => {
                  handleHorizontalDragStart(e);
                  handleHorizontalDragMove(e);
                }}
              >
                <Text className="grid-item-text">{item.title}</Text>
              </View>
            ))}
          </GridView>
        </View>

        <View className="section">
          <Text className="section-title">ListView 组件</Text>
          <ListView className="list-view" scrollY height={300}>
            {listData.map((item) => (
              <View key={item.id} className="list-item">
                <Text className="list-item-title">{item.title}</Text>
                <Text className="list-item-desc">{item.desc}</Text>
              </View>
            ))}
          </ListView>
        </View>
      </ScrollView>

      {/* 动态消息提示 */}
      {message && (
        <View className="message">
          <Text className="message-text">{message}</Text>
        </View>
      )}
    </View>
  );
};

export default SkylinePage;
