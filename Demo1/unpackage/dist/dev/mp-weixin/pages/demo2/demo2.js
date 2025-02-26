"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    let num1 = 6;
    let num2 = common_vendor.ref(1);
    console.log(num2.value);
    let man = common_vendor.ref({ name: "Kobe", age: 40 });
    man.value.age = 50;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(num1)),
        b: common_vendor.t(common_vendor.unref(num2)),
        c: common_vendor.t(common_vendor.unref(man))
      };
    };
  }
};
wx.createPage(_sfc_main);
