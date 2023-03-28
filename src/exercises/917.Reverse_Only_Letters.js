/**
 * @param {string} s
 * @return {string}
 */
const checkLetter = (char) => {
  let n = char.charCodeAt(0);
  return (n >= 65 && n < 91) || (n >= 97 && n < 123);
};
var reverseOnlyLetters = function (s) {
  let lo = 0;
  let arr = s.split('');
  let hi = arr?.length - 1;
  while (lo <= hi) {
    console.log('lo', lo);
    console.log('hi', hi);
    if (lo === hi) {
      break;
    }
    if (checkLetter(arr[lo]) && checkLetter(arr[hi])) {
      let temp = arr[lo];
      arr.splice(lo, 1, arr[hi]);
      arr.splice(hi, 1, temp);
      console.log([...arr]);
      lo++;
      hi--;
    } else if (!checkLetter(arr[lo])) {
      lo++;
    } else if (!checkLetter(arr[hi])) {
      hi--;
    }
  }
  return arr.join('');
};
export { reverseOnlyLetters };
