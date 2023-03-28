/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [prices[0]];
  let result = [];

  let lastIndex = 0;
  for (let index = 1; index < prices?.length; index++) {
    console.log('====', prices[index]);
    console.log('stack: ', stack);
    console.log('result: ', result);
    // if (index > lastIndex && prices[index] <= stack[stack.length - 1]) {
    //   result.push(stack[stack.length - 1] - prices[index]);
    //   let last = stack.pop();
    //   console.log('last:', last);
    //   stack.push(prices[index]);
    //   lastIndex = index;
    //   continue;
    // }
    if (index > lastIndex && prices[index] > stack[stack.length - 1]) {
      stack.unshift(prices[index]);
      lastIndex = index;
      continue;
    }
    while (
      index > lastIndex &&
      prices[index] <= stack[stack.length - 1] &&
      stack?.length > 0
    ) {
      result.push(stack[stack.length - 1] - prices[index]);
      stack.pop();
    }
    stack.push(prices[index]);
    continue;

    // if (stack?.length === 0) {
    //   stack.push(prices[index]);
    //   lastIndex = index;
    //   continue;
    // }
    // if (prices[index] <= stack[stack.length - 1]) {
    //   result.push(stack[0] - prices[index]);
    //   stack.pop();
    // } else {
    //   stack.shift(prices[index]);
    // }
  }
};
export { finalPrices };
