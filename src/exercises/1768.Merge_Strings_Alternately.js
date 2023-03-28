/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let p1 = 0,
    p2 = 0;
  let result = '';
  while (p1 < word1?.length && p2 < word2?.length) {
    let char1 = word1[p1];
    let char2 = word2[p2];
    let combine = char1 + char2;
    result += combine;
    p1++;
    p2++;
  }
  if (word1.length > word2?.length) {
    result += word1.substring(p1);
  } else {
    result += word2.substring(p2);
  }
  return result;
};
export { mergeAlternately };
