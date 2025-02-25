"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    const pic = common_vendor.ref("/static/jx.jpg");
    return (_ctx, _cache) => {
      return {
        a: pic.value
      };
    };
  }
};
wx.createPage(_sfc_main);
