/**
 * @param {string} s
 * @return {number}
 */
const checkDuplicate = (arr) => {
  return arr?.length === new Set(arr)?.size;
};
var countGoodSubstrings = function (s) {
  let count = 0;
  let index = 0;
  while (index <= s?.length - 3) {
    let sub = [s[index], s[index + 1], s[index + 2]];
    if (checkDuplicate(sub)) {
      count++;
    }
    index++;
  }
  console.log('count:', count);
  return count;
  // for(let index=0;index<s?.length;index++){
  // }
};
export { countGoodSubstrings };
