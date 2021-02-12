const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam = members => 
  (members instanceof Array)
    ? members.filter(it => typeof(it) === 'string')
             .map(it => it.trim().toUpperCase()[0])
             .sort().join('')
    : false;

