"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo7",
  setup(__props) {
    const goods = common_vendor.ref([
      { id: 1, name: "小米" },
      { id: 2, name: "OPPO" },
      { id: 3, name: "VIVO" },
      { id: 4, name: "苹果" }
    ]);
    function remove(index) {
      goods.value.splice(index, 1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => remove(index), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
