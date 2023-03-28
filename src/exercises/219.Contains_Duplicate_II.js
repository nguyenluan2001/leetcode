/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let subtract = nums?.length > k ? k : 0;
  for (let index = 0; index < nums?.length - subtract; index++) {
    // let tracking = 1;
    // while (tracking <= k) {
    //   let arr = [...nums].splice(index, tracking + 1);
    //   console.log('arr: ', arr);
    //   // let arr = [nums[index], ...rest];
    //   const isDuplicate = arr?.length !== new Set(arr).size;
    //   if (isDuplicate) return true;
    //   tracking++;
    // }
    let arr = [...nums].splice(index, k);
    console.log('arr: ', arr);
    // let arr = [nums[index], ...rest];
    const isDuplicate = arr?.length !== new Set(arr).size;
    if (isDuplicate) return true;
  }
  return false;
};
export { containsNearbyDuplicate };
