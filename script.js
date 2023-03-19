// var countOdds = function (low, high) {
//   let count = 0;
//   for (let i = low; i <= high; i++) {
//     if (i % 2 !== 0) {
//       count += 1;
//     }
//   }
//   return count;
// };

// https://leetcode.com/problems/three-divisors/
// var isThree = function (n) {
//   let start = 0;
//   let arr = [];
//   let newArray = [];
//   for (let i = 0; i < n; i++) {
//     start += 1;
//     arr.push(start);
//   }
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[j] * arr[k] == n) {
//         newArray.push(arr[k]);
//       } else {
//         newArray.push();
//       }
//     }
//   }
//   if (newArray.length == 3) {
//     return true;
//   } else {
//     return false;
//   }
// };
