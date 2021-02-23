const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  arr1 = [];
  arr2 = [];
  flug = true;
  constructor(flug = true){
    this.flug = flug;
    this.init();
  }
  
  encrypt(str, key) {
    let ind = 0;
    let result = str.toUpperCase().split('').map( (it, index) => {
      if (this.arr1.includes(it))
        return this.arr2[this.arr1.indexOf(it) + this.arr1.indexOf(key.toUpperCase()[(index-ind) % key.length])];
      else {
        ++ind;
        return it;
      }
    })
    if (this.flug) return result.join('');
    else return result.reverse().join('');
  }    

  decrypt(str, key) {
    let ind = 0;
    let result = str.toUpperCase().split('').map( (it, index) => {
      if (this.arr1.includes(it))
        return this.arr2[this.arr2.lastIndexOf(it) - this.arr1.indexOf(key.toUpperCase()[(index-ind) % key.length])];
      else {
        ++ind;
        return it;
      }
    })
    if (this.flug) return result.join('');
    else return result.reverse().join('');
  }

  init () {
    for (let i = 65; i <= 90; i++) {
      this.arr1.push(String.fromCodePoint(i));
    }
    this.arr2 = [].concat(this.arr1, this.arr1);
  }
}

module.exports = VigenereCipheringMachine;
