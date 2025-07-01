"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
    };
    const submitScore = () => {
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.o(maskChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        i: common_vendor.p({
          type: "info",
          size: "28"
        }),
        j: common_vendor.o(clickInfo),
        k: common_vendor.p({
          type: "info",
          size: "28"
        }),
        l: common_vendor.o(clickScore),
        m: common_vendor.p({
          type: "info",
          size: "28"
        })
      } : {}, {
        n: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        o: common_vendor.o(clickInfoClose),
        p: common_vendor.p({
          readonly: true,
          value: "5"
        }),
        q: common_vendor.sr(infoPopup, "359fa476-5", {
          "k": "infoPopup"
        }),
        r: common_vendor.p({
          type: "bottom"
        }),
        s: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        t: common_vendor.o(clickScoreClose),
        v: common_vendor.o(($event) => userScore.value = $event),
        w: common_vendor.p({
          ["allow-half"]: true,
          modelValue: userScore.value
        }),
        x: common_vendor.t(userScore.value),
        y: common_vendor.o(submitScore),
        z: !userScore.value,
        A: common_vendor.sr(scorePopup, "359fa476-8", {
          "k": "scorePopup"
        }),
        B: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
