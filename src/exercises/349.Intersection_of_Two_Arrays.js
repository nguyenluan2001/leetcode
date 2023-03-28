/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const uniqueNums1 = [...new Set(nums1)];
  const uniqueNums2 = [...new Set(nums2)];
  const mergeNums = [...uniqueNums1, ...uniqueNums2];
  console.log(mergeNums);
  let hash = new Map();
  mergeNums.forEach((item) => {
    if (!hash.has(item)) {
      hash.set(item, 1);
    } else {
      hash.set(item, hash.get(item) + 1);
    }
  });
  console.log([...hash.entries()]);
  return [...hash.entries()]
    ?.filter(([key, value]) => value > 1)
    ?.map(([key, value]) => key);
};
export { intersection };
