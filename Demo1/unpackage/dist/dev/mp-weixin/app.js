"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/demo1/demo1.js";
  "./pages/demo2/demo2.js";
  "./pages/demo3/demo3.js";
  "./pages/demo4/demo4.js";
  "./pages/demo5/demo5.js";
  "./pages/demo7/demo7.js";
  "./pages/demo6/demo6.js";
  "./pages/demo8/demo8.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
