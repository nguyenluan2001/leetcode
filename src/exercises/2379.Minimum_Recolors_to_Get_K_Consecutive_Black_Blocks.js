/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let maxBlackBlock = 0;
  let maxSub = '';
  for (let index = 0; index <= blocks?.length - k; index++) {
    let sub = blocks.substring(index, index + k);
    let countBlackBlock = (sub.match(/B/g) || []).length;
    if (countBlackBlock > maxBlackBlock) {
      maxBlackBlock = countBlackBlock;
      maxSub = sub;
    }
  }
  return (maxSub.match(/W/g) || []).length;
};
export { minimumRecolors };
