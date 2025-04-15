import React, { useState, useEffect } from "react";
import { View, Button, Input, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Keyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0); // 键盘高度
  const [selectedTextRange, setSelectedTextRange] = useState({
    start: 0,
    end: 0,
  }); // 选中文本范围
  const [inputValue, setInputValue] = useState(""); // 输入框的值

  useEffect(() => {
    // 监听键盘高度变化
    Taro.onKeyboardHeightChange((res) => {
      setKeyboardHeight(res.height);
      console.log("键盘高度变化", res.height);
    });

    // 清理函数
    return () => {
      Taro.offKeyboardHeightChange();
    };
  }, []);

  // 隐藏键盘
  const handleHideKeyboard = () => {
    Taro.hideKeyboard({
      success: () => {
        console.log("键盘已隐藏");
      },
      fail: (err) => {
        console.error("隐藏键盘失败", err);
      },
    });
  };

  // 获取选中文本范围
  const handleGetSelectedTextRange = () => {
    Taro.getSelectedTextRange({
      success: (res) => {
        setSelectedTextRange({ start: res.start, end: res.end });
        console.log("选中文本范围", res);
      },
      fail: (err) => {
        console.error("获取选中文本范围失败", err);
      },
    });
  };

  // 输入框内容变化
  const handleInputChange = (e) => {
    setInputValue(e.detail.value);
  };

  return (
    <View className="keyboard">
      <View>
        <Input
          type="text"
          placeholder="请输入内容"
          value={inputValue}
          onInput={handleInputChange}
          onFocus={() => console.log("输入框获得焦点")}
          onBlur={() => console.log("输入框失去焦点")}
        />
      </View>

      <View>
        <Button onClick={handleHideKeyboard}>隐藏键盘</Button>
        <Button onClick={handleGetSelectedTextRange}>获取选中文本范围</Button>
      </View>

      <View>
        <Text>键盘高度: {keyboardHeight} px</Text>
        <Text>
          选中文本范围: {selectedTextRange.start} - {selectedTextRange.end}
        </Text>
      </View>
    </View>
  );
};

export default Keyboard;
