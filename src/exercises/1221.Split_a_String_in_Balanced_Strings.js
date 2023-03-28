/**
 * @param {string} s
 * @return {number}
 */
const isBalance = (str) => {
  return str.split('R')?.length === str.split('L')?.length;
};
var balancedStringSplit = function (s) {
  let count = 0;
  for (let index = 0; index < s?.length; index++) {
    let slide = 2;
    while (slide <= s.length) {
      let sub = s.substring(index, index + slide);
      console.log('sub: ', sub);
      if (isBalance(sub)) {
        count++;
        index += slide - 1;
        break;
      }
      slide++;
    }
  }
  return count;
};
export { balancedStringSplit };
