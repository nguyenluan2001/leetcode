/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

const generateHashTable = (string) => {
  let newString = [...new Set(string.replaceAll(' ', '').split(''))];
  console.log(newString);
  let hashTB = new Map();
  for (let index = 0; index < newString?.length; index++) {
    let char = newString[index];
    console.log(`${char}:`, String.fromCharCode(index + 97));
    if (!hashTB.has(char)) {
      hashTB.set(char, String.fromCharCode(index + 97));
    }
  }
  return hashTB;
};
var decodeMessage = function (key, message) {
  let hashTable = generateHashTable(key);
  let result = '';
  for (let index = 0; index < message?.length; index++) {
    let char = message[index];
    if (char === ' ') {
      result += ' ';
      continue;
    }
    result += hashTable.get(char);
  }
  console.log('==== hashTable', [...hashTable.entries()]);
  return result;
};
export { decodeMessage };
