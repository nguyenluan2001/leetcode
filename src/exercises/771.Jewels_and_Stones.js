/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const PI = Math.PI;
const hash = (char, len) => {
  return Math.floor(len * ((char.charCodeAt(0) * PI) % 1));
};
var numJewelsInStones = function (jewels, stones) {
  let len = stones?.length;
  let hashTable = [];
  console.log('hashTable:', hashTable);
  for (let index = 0; index < stones?.length; index++) {
    let char = stones[index];
    let hashIndex = hash(char, len);
    console.log('index:', hashIndex);
    console.log('hashTable:', hashTable[hashIndex]);
    if (hashTable?.[hashIndex]?.length === undefined) {
      hashTable[hashIndex] = [];
      hashTable[hashIndex].push(char);
      continue;
    }
    hashTable[hashIndex].push(char);
  }
  let count = 0;
  for (let index = 0; index < jewels?.length; index++) {
    let char = stones[index];
    let hashIndex = hash(char, len);
    count += hashTable[hashIndex]?.length;
  }
  console.log('hashTable:', hashTable);
  return count;
};
export { numJewelsInStones };
