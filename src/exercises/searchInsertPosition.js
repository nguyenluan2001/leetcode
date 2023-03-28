/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const calculateMid = (low, high) => {
  return low + Math.floor((high - low) / 2);
};
var search = function (nums, target) {
  let low = 0;
  let high = nums?.length - 1;
  let mid = calculateMid(low, high);
  while (target !== nums[mid]) {
    if (target > nums[high] || target < nums[low]) return -1;
    if (target > nums[mid]) {
      low = mid + 1;
      mid = calculateMid(low, high);
    } else {
      high = mid - 1;
      mid = calculateMid(low, high);
    }
  }
  return mid;
};
var searchInsert = function (nums, target) {
  let newNums = [...nums, target].sort((a, b) => a - b);
  newNums = [...new Set(newNums)];
  return search(newNums, target);
};
export { searchInsert };
