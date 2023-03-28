/**
 * @param {number[]} nums
 * @return {number[]}
 */
const checkEvenOrOdd = (num1, num2) => {
  return (num1 + num2) % 2 === 0;
};
var sortArrayByParityII = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let countEven = 0;
  let countOdd = nums?.length - 1;
  let result = [];
  let hash = new Map();
  while (lo <= hi) {
    if (lo === hi) {
      if (nums[lo] % 2 === 0) {
        hash.set(nums[lo], countEven);
      } else {
        hash.set(nums[lo], countOdd);
      }
      break;
    } else if (nums[lo] % 2 === 0) {
      hash.set(nums[lo], countEven);
      lo++;
      countEven += 2;
    } else if (nums[lo] % 2 !== 0) {
      console.log('countOdd', countOdd);
      hash.set(nums[lo], countOdd);
      lo++;
      countOdd -= 2;
      console.log('countOdd', countOdd);
    } else if (nums[hi] % 2 === 0) {
      hash.set(nums[hi], countEven);
      hi--;
      countEven += 2;
    } else if (nums[hi] % 2 !== 0) {
      hash.set(nums[hi], countOdd);
      hi--;
      countOdd -= 2;
    }
  }
  console.log([...hash.entries()]);
  return result;
};
export { sortArrayByParityII };
