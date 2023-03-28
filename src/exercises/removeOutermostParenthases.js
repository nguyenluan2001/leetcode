/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let result = [];
  let max = 0;
  let previousIndex = 0;
  for (let index = 0; index < s?.length; index++) {
    let char = s[index];
    if (char === '(') {
      stack.push(char);
      if (stack.length === 1) {
        previousIndex = index;
      }
    } else if (char === ')') {
      stack.pop();
      if (stack?.length === 0) {
        let child = s.substring(previousIndex, index + 1);
        result.push(child);
      }
    }
  }
  result = result
    ?.map((item) => {
      return item.substring(1, item?.length - 1);
    })
    .reduce((pre, current) => {
      return (pre += current);
    }, '');
  console.log(result);
  return result;
};
export { removeOuterParentheses };
