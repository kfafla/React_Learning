export default defineAppConfig({
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
    "scope.webView": {
      desc: "需要加载网页内容",
    },
  },
  pages: [
    "pages/index/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/product/index",
    "pages/login/index",
    "pages/namecard/index",
    "pages/music/index",
    "pages/account-book/index",
    "pages/test/index",
    "pages/basic/index",
    "pages/contact/index",
    "pages/container/index",
    "pages/device/index",
    "pages/form/index",
    "pages/location/index",
    "pages/map/index",
    "pages/media/index",
    "pages/skyline/index",
    "pages/webview/index",
    "pages/bluetooth/index",
    "pages/wifi/index",
    "pages/clipboard/index",
    "pages/barcode/index",
    "pages/screen/index",
    "pages/network/index",
    "pages/Keyboard/index",
    "pages/service/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#4594D5",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
    navigationBarTitleText: "WebView Example",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/test/index",
        text: "练习",
        iconPath: "./assets/tabs/shoucang1.png",
        selectedIconPath: "./assets/tabs/shoucang.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
    ],
  },
});
