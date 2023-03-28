/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let stack = [s[0]];
  let trackingIndex = 0;
  for (let index = 1; index < s.length; index++) {
    let char = s[index];
    if (char === stack[0]) {
      stack.shift();
      trackingIndex++;
    } else {
      stack.push(char);
    }
  }
  if (stack?.length === 0) return -1;
  return trackingIndex;
};
export { firstUniqChar };
