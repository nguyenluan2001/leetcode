/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let split = num.split('').sort((a, b) => a - b);
  let new1 = '';
  let new2 = '';
  while (split?.length !== 0) {
    new1 += split.shift();
    new2 += split.shift();
  }
  return +new1 + +new2;
};
export { minimumSum };
