/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  console.log(sorted);
  let result = 0;
  for (let index = 0; index <= sorted.length - 1; index += 2) {
    console.log(index);
    result += Math.min(sorted[index], sorted[index + 1]);
  }
  return result;
};
export { arrayPairSum };
