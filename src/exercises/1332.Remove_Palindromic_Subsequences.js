/**
 * @param {string} s
 * @return {number}
 */
const checkPalindrome = (string) => {
  let splitStr = string.split('');
  return splitStr?.toString() === splitStr.reverse()?.toString();
};
var removePalindromeSub = function (s) {
  let temp = s.slice();
  let lo = 0;
  let hi = temp.length - 1;
  let result = 0;
  let stack = [];
  while (temp !== '') {
    while (lo <= hi) {
      if (temp[lo] === temp[hi]) {
        lo++;
        hi--;
      } else {
        stack.unshift(temp[hi]);
        hi--;
      }
    }
    result++;
    temp = stack.join('');
    stack = [];
  }
  return result;
};
export { removePalindromeSub };
