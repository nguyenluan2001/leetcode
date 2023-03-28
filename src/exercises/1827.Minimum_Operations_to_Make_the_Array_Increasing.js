/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let previous = 0;
  let count = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] <= nums[previous]) {
      count += nums[previous] + 1 - nums[index];
      nums[index] = nums[previous] + 1;
    }
    previous = index;
  }
  return count;
};
export { minOperations };
