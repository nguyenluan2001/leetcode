/**
 * @param {string} s
 * @return {string}
 */
const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};
var reverseWords = function (s) {
  let listWords = s.split(' ');
  let result = listWords.reduce((pre, current) => {
    let splitWord = current.split('');
    let i = 0,
      j = splitWord?.length - 1;
    while (i < j) {
      splitWord = swap([...splitWord], i, j);
      i++;
      j--;
    }
    return [...pre, splitWord.join('')];
  }, []);

  console.log(result);
  return result.join(' ');
};
export { reverseWords };
