/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let min = +Infinity;
  let count = 0;
  // for (let index = 0; index < nums?.length; index++) {
  //   let tracking = index + 1;
  //   while (tracking <= nums?.length - k + 1) {
  //     count++;
  //     let rest = [...nums]?.splice(tracking, k - 1);
  //     let subArr = [nums[index], ...rest];
  //     console.log('subArr: ', subArr);
  //     let subMax = +Math.max(...subArr);
  //     let subMin = +Math.min(...subArr);
  //     let difference = subMax - subMin;
  //     console.log('difference: ', difference);
  //     if (difference < min) {
  //       min = difference;
  //       // break;
  //     }
  //     tracking++;
  //   }
  // }
  nums = nums.sort((a, b) => b - a);
  let tracking = 0;
  while (tracking <= nums?.length - k) {
    let diff = nums[tracking] - nums[tracking + k - 1];
    if (diff < min) {
      min = diff;
    }
    tracking++;
  }
  console.log('count: ', count);
  return min;
};
export { minimumDifference };
