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

//https:leetcode.com/problems/merge-sorted-array/
// var merge = function (nums1, m, nums2, n) {
//   let arr = [];
//   for (let k = 0; k < nums1.length; k++) {
//     if (nums1[k] !== 0) {
//       arr.push(nums1[k]);
//     } else if (
//       (nums1[k] !== m && nums1[k] !== 0) ||
//       (nums1[k] !== n && nums1[k] !== 0)
//     ) {
//       arr.push(nums1[k]);
//     }
//   }
//   return arr.concat(nums2).sort();
// };

var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] - nums[j] == k) {
        count = count + 1;
      }
    }
  }
  return count;
};
