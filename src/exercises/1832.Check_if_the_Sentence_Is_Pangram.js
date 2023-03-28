/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let hashMap = new Map();
  for (let index = 0; index < sentence?.length; index++) {
    let char = sentence[index];
    if (!hashMap.has(char)) {
      hashMap.set(char, 1);
      continue;
    }
    let count = hashMap.get(char);
    hashMap.set(char, count + 1);
  }
  return [...hashMap.values()].every((item) => item > 0) && hashMap.size === 26;
};
export { checkIfPangram };
