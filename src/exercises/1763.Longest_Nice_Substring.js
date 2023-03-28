/**
 * @param {string} s
 * @return {string}
 */
const checkIsLowerCase = (char) => {
  return char === char.toLowerCase();
};
const checkIsUpperCase = (char) => {
  return char === char.toUpperCase();
};
const checkIsNiceString = (string) => {
  let arr = [...new Set(string.split(''))];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    let charCode = char.charCodeAt(0);
    if (checkIsLowerCase(char)) {
      let upperCase = String.fromCharCode(charCode - 32);
      if (!arr.includes(upperCase)) return false;
      continue;
    }
    if (checkIsUpperCase(char)) {
      let lowerCase = String.fromCharCode(charCode + 32);
      if (!arr.includes(lowerCase)) return false;
      continue;
    }
  }
  return true;
};
var longestNiceSubstring = function (s) {
  let maxSub = '';
  for (let index = 0; index < s?.length; index++) {
    let hi = s.length - 1;
    while (index <= hi) {
      let sub = s.substring(index, hi + 1);
      let check = checkIsNiceString(sub);
      if (check) {
        if (sub?.length > maxSub?.length) {
          maxSub = sub;
        }
      }
      hi--;
    }
  }
  return maxSub;
};
export { longestNiceSubstring, checkIsNiceString };
