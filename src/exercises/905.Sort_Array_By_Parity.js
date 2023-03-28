/**
 * @param {number[]} nums
 * @return {number[]}
 */
const isEven = (num) => num % 2 === 0;
var sortArrayByParity = function (nums) {
  let result = [];
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    if (lo === hi) {
      if (isEven(nums[lo])) {
        result.unshift(nums[lo]);
      } else {
        result.push(nums[lo]);
      }
      break;
    }
    if (isEven(nums[lo])) {
      result.unshift(nums[lo]);
    } else {
      result.push(nums[lo]);
    }
    if (isEven(nums[hi])) {
      result.unshift(nums[hi]);
    } else {
      result.push(nums[hi]);
    }
    lo++;
    hi--;
  }
  console.log(result);
  return result;
};
export { sortArrayByParity };
