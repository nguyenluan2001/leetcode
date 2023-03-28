/**
 * @param {string} s
 * @return {number}
 */
const isSingleParentheses = (char) => {
  return char === ')' || char === '(';
};
const isDoubleParentheses = (arr) => {
  return arr[0] === '(' && arr[1] === ')';
};
const isOperator = (char) => {
  return char === '+' || char === '-' || char === '*' || char === '/';
};
var maxDepth = function (s) {
  let stack = [];
  let count = 0;
  let max = 0;
  for (let index = 0; index < s?.length; index++) {
    let char = s[index];
    if (char === '(') {
      stack.push(char);
      if (stack?.length > max) max = stack.length;
    } else if (char === ')') {
      stack.pop();
    }
  }
  console.log('max', max);
  return max;
};
export { maxDepth };
