/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  for (let index = 0; index < operations?.length; index++) {
    let operator = operations[index];
    if (!isNaN(operator)) {
      stack.push(parseInt(operator, 10));
    } else if (operator === 'C') {
      stack.pop();
    } else if (operator === 'D') {
      let last = [...stack].pop();
      stack.push(last * 2);
    } else if (operator === '+') {
      let op1 = stack[stack?.length - 1];
      let op2 = stack[stack?.length - 2];
      stack.push(op1 + op2);
    }
  }
  return stack.reduce((total, current) => total + current, 0);
  console.log('==== stack ===', stack);
};
export { calPoints };
