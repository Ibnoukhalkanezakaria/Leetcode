// https://leetcode.com/problems/plus-one/
var plusOne = function (digits) {
  let last = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits.length > 1) {
      last.push(+digits.slice(-1) + 1);
      return digits.slice(0, length - 1).concat(last);
    } else {
      return (+digits + 1).toString().split("").map(Number);
    }
  }
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
