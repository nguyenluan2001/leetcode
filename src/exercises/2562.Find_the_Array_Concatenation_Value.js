/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let result = 0;
  while (lo <= hi) {
    let concat = 0;
    if (lo === hi) {
      concat = parseInt(`${nums[lo]}`, 10);
    } else {
      concat = parseInt(`${nums[lo]}${nums[hi]}`, 10);
      lo++;
      hi--;
    }
    result += concat;
  }
  console.log(result);
  return result;
};
export { findTheArrayConcVal };
