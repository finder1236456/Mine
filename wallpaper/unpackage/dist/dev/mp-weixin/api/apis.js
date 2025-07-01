"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({ url: "/homeBanner" });
}
function apiGetRandom() {
  return utils_request.request({ url: "/randomWall" });
}
function apiGetClassify() {
  return utils_request.request({ url: "/classify" });
}
function apiGetClassList() {
  return utils_request.request({ url: "/wallList" });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetRandom = apiGetRandom;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
