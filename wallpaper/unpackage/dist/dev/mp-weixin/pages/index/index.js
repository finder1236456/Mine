"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_uni_icons2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_uni_icons = () => "../../components/uni-icons/uni-icons.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_common_title + _easycom_theme_item)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_vendor.p({
      type: "sound-filled",
      size: "24",
      color: "#b3e0f2"
    }),
    e: common_vendor.f(4, (item, k0, i0) => {
      return {};
    }),
    f: common_vendor.p({
      type: "right",
      size: "24",
      color: "#cbcbcb"
    }),
    g: common_vendor.p({
      type: "calendar",
      size: "24",
      color: "#b3e0f2"
    }),
    h: common_vendor.f(8, (item, k0, i0) => {
      return {};
    }),
    i: common_assets._imports_3,
    j: common_vendor.f(8, (item, k0, i0) => {
      return {
        a: "08080e99-5-" + i0
      };
    }),
    k: common_vendor.p({
      isMore: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
