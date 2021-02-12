const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';
	if ( Object.prototype.toString.call(date) === '[object Date]' ) {
	    const month = date.getMonth();
      if (month === 11 || month <= 1) return 'winter';
      if (month >= 2 && month <= 4) return 'spring';
      if (month >= 5 && month <= 7) return 'summer';
      if (month >= 8) return 'autumn';
	}	else {
	  throw new Error();
	}
};
