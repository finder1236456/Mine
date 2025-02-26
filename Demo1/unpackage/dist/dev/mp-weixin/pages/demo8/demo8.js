"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo8",
  setup(__props) {
    const iptnum = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: iptnum.value
      };
    };
  }
};
wx.createPage(_sfc_main);
