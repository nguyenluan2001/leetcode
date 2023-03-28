/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let result = 0;
  for (let i = 0; i < nums?.length; i++) {
    let item = nums[i];
    let stack = [item];
    for (let j = i + 1; j < nums?.length; j++) {
      let last = [...stack].pop();
      if (nums[j] - last === diff) {
        stack.push(nums[j]);
        console.log('stack:', stack);
      }
      if (stack?.length === 3) {
        result++;
        break;
      }
    }
  }
  return result;
};
export { arithmeticTriplets };
