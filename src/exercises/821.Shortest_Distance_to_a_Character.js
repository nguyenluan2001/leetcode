/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const calculateDistance = (a, b) => Math.abs(a - b);
const findMinDistance = (a, arr) => {
  let distances = arr?.map((item) => calculateDistance(a, item));
  return Math.min(...distances);
};
var shortestToChar = function (s, c) {
  let arr = s.split('');
  let indices = arr?.reduce((pre, current, index) => {
    if (current === c) return [...pre, index];
    else {
      return pre;
    }
  }, []);
  console.log('indices:', indices);
  console.log('arr:', arr);
  let result = [];
  arr
    ?.map((item, index) => index)
    .forEach((item) => {
      result.push(findMinDistance(item, indices));
    });
  console.log('result', result);
  return result;
};
export { shortestToChar };
