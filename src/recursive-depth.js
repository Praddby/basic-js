const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => arr.some(it => Array.isArray(it)) ? 1 + this.calculateDepth(arr.reduce((res, val) => res.concat(val), [])) : 1;
};