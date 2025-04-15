import React from "react";
import { WebView } from "@tarojs/components";

import "./index.scss";

const Webview = () => {
  return (
    <WebView
      src="file:///src/pages/webview/index.html"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Webview;
