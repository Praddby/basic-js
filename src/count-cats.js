const CustomError = require("../extensions/custom-error");

module.exports = countCats = backyard => backyard.map(item => item.filter( it => it === '^^')).reduce( (res, curr) => res.concat(curr), []).length;
