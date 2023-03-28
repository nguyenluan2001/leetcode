/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const calculateMid = (low, high) => {
  return low + Math.floor((high - low) / 2);
};
// var search = function (nums, target) {
//   let low = 0;
//   let high = nums?.length - 1;
//   let mid = calculateMid(low, high);
//   while (target !== nums[mid]) {
//     if (target > nums[high] || target < nums[low]) return -1;
//     if (target > nums[mid]) {
//       low = mid + 1;
//       mid = calculateMid(low, high);
//     } else {
//       high = mid - 1;
//       mid = calculateMid(low, high);
//     }
//   }
//   return mid;
// };
var searchRecursion = (nums, target, low, high) => {
  let mid = calculateMid(low, high);
  if (target === nums[mid]) {
    return mid;
  }
  if (target > nums[high] || target < nums[low]) return -1;
  if (target > nums[mid]) {
    return searchRecursion(nums, target, mid + 1, high);
  }
  if (target < nums[mid]) {
    return searchRecursion(nums, target, low, mid - 1);
  }
};
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let result = searchRecursion(nums, target, low, high);
  return result;
};
export { search };
