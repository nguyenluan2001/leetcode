/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let count = 0;
  num = num.toString();
  for (let index = 0; index <= num?.length - k; index++) {
    let sub = +num.substring(index, index + k);
    console.log('sub: ', sub);
    if (+num % sub === 0) {
      count++;
    }
  }
  return count;
};
export { divisorSubstrings };
