/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const calculateMid = (low, high) => {
  return low + Math.floor((high - low) / 2);
};
const getIndice = (nums, target, low, high, indices = []) => {
  let mid = calculateMid(low, high);
  if (low >= high) {
    if (nums[mid] === target) {
      return indices.unshift(high);
    } else return;
  }
  if (target === nums[mid]) {
    indices.unshift(high);
    if (low === 0) {
      getIndice(nums, target, 0, mid, indices);
    } else {
      getIndice(nums, target, mid, high, indices);
    }
  }
  return indices;
};
var targetIndices = function (nums, target) {
  const newNums = nums.sort((a, b) => a - b);
  let low = 0;
  let high = newNums.length - 1;
  let mid = calculateMid(low, high);
  // let indicesLeft = getIndice(newNums, target, 0, mid);
  let indicesRight = getIndice(newNums, target, mid, high);
  // while (low < high) {
  //   if (target === newNums[mid]) {
  //   }
  // }
  // return [...indicesLeft, ...indicesRight];
  return indicesRight;
};
export { targetIndices };
