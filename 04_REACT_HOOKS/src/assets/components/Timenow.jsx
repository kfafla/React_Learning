import { useState, useEffect } from "react";
import React from "react";

const Timenow = () => {
 const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 清除定时器
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>当前时间: {formatTime(time)}</h1>
    </div>
  );
}
export default Timenow
