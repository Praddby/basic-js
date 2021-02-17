const CustomError = require("../extensions/custom-error");

const chainMaker = {
  messange: [],

  getLength() {
    return this.messange.length;
  },
  addLink(value) {
    typeof(value) === 'undefined' ? this.messange.push('(  )') : this.messange.push(`~( ${value} )~`);
    return this;
  },
  removeLink(position) {
    if (position >= 0 && position <= this.getLength()-1) {
      this.messange.splice(position-1, 1);
      return this;
    } else {
      this.messange.length = 0;
      throw new Error();
    }
  },
  reverseChain() {
    this.messange.reverse();
    return this;
  },
  finishChain() {
    let result = this.messange.join('').slice(1, this.messange.join('').length-1);
    this.messange.length = 0;
    return result;
  }
};

module.exports = chainMaker;
