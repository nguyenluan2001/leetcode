/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let stack = [];
  for (let index = 0; index < logs?.length; index++) {
    let op = logs[index];
    if (op === './') continue;
    if (op === '../') {
      stack.pop();
      continue;
    }
    stack.push(op);
  }
  return stack.length;
};
export { minOperations };
