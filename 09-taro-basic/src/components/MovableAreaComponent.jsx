// MovableAreaComponent.jsx
import React from "react";
import { View, MovableArea, MovableView } from "@tarojs/components";

const MovableAreaComponent = () => {
  const movableAreaStyle = {
    width: "100%",
    height: "300px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    position: "relative",
    marginTop: "20px",
  };

  const movableViewStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "#4caf50",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <View style={movableAreaStyle}>
      <MovableArea style={movableAreaStyle}>
        <MovableView
          style={movableViewStyle}
          direction="all"
          damping={50}
          out-of-bounds
          inertia
        >
          拖动我
        </MovableView>
      </MovableArea>
    </View>
  );
};

export default MovableAreaComponent;
