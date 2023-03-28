/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (let index = 0; index < s?.length; index++) {
    let char = s[index];
    let last = stack[stack?.length - 1];
    if (char === last) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  return stack.join('');
};
export { removeDuplicates };
