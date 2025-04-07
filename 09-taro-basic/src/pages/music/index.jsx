import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Audio, Text } from "@tarojs/components";
import "./index.scss";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.detail.currentTime);
  };

  const handleLoadedMetadata = (e) => {
    setDuration(e.detail.duration);
  };

  return (
    <View className="music">
      <Audio
        src="https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/E.T.mp3" // 替换为你的音乐文件链接
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        controls
        showMiddleControls
        poster="https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/OIP-C.jpg" // 替换为你的封面图片链接
      />
      <View className="controls">
        <Button onClick={() => Taro.audioContext.pause()}>暂停</Button>
        <Button onClick={() => Taro.audioContext.play()}>播放</Button>
      </View>
      <View className="time-info">
        <Text>当前时间：{currentTime.toFixed(2)} 秒</Text>
        <Text>总时长：{duration.toFixed(2)} 秒</Text>
      </View>
    </View>
  );
};

export default Music;
