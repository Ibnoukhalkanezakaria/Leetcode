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

// var countKDifference = function (nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] - nums[j] == k) {
//         count = count + 1;
//       }
//     }
//   }
//   return count;
// };

//https:leetcode.com/problems/remove-duplicates-from-sorted-array/

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let index = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[index] = nums[i];
//       index++;
//     }
//   }

//   return index;
// };

//https:leetcode.com/problems/palindrome-number/
// var isPalindrome = function (x) {
//   let arr = x.toString().split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.reverse().join("") == x) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// https://leetcode.com/problems/length-of-last-word/
// var lengthOfLastWord = function (s) {
//   let empty = [""];
//   let arr = s.split(" ");
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let check = empty.indexOf(arr[i]);
//     if (check == -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr.pop().length;
// };

// https://leetcode.com/problems/single-number/
// var singleNumber = function (nums) {
//   let newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let check = true;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] == nums[j]) {
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       newArr.push(nums[i]);
//     }
//   }
//   return newArr;
// };

// https://leetcode.com/problems/sort-colors/
// var sortColors = function (nums) {
//   return nums.sort();
// };

// var getConcatenation = function (nums) {
//   return nums.concat(nums);
// };

// var twoSum = function (nums, target) {
//   let newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && i != j) {
//         newArr.push(i, j);
//         return newArr;
//       }
//     }
//   }
// };

// https://leetcode.com/problems/missing-number/
// var missingNumber = function (nums) {
//   let min = Math.min(...nums);
//   let max = nums.length;
//   let arr = nums.sort();
//   let newArr = [];
//   let newArr2 = [];
//   for (let j = min; j <= max; j++) {
//     newArr.push(j);
//   }
//   for (let i = 0; i <= arr.length; i++) {
//     for (let k = 0; k <= newArr.length; k++) {
//       let check = arr.indexOf(newArr[k]);
//       if (check == -1) {
//         newArr2.push(newArr[k]);
//         return +newArr2;
//       }
//     }
//   }
// };
