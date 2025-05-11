"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.p({
      type: "download",
      size: "20",
      color: "#b3e0f2"
    }),
    c: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    }),
    d: common_vendor.p({
      type: "star-filled",
      size: "20",
      color: "#b3e0f2"
    }),
    e: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    }),
    f: common_vendor.p({
      type: "chatboxes-filled",
      size: "20",
      color: "#b3e0f2"
    }),
    g: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    }),
    h: common_vendor.p({
      type: "notification-filled",
      size: "20",
      color: "#b3e0f2"
    }),
    i: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    }),
    j: common_vendor.p({
      type: "chatbubble-filled",
      size: "20",
      color: "#b3e0f2"
    }),
    k: common_vendor.p({
      type: "right",
      size: "15",
      color: "#aaa"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
