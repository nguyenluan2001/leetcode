/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let split = s.split('');
  let arr = [];
  let trackingI = 0;
  let trackingD = split?.length;
  if (split[0] === 'I') {
    arr = [0];
    trackingI++;
  } else {
    arr = [split.length];
    trackingD--;
  }
  for (let index = 1; index < split?.length; index++) {
    if (split[index] === 'I') {
      arr.push(trackingI);
      trackingI++;
    } else {
      arr.push(trackingD);
      trackingD--;
    }
    if (index === split.length - 1) {
      arr.push(split[index] === 'I' ? trackingI : trackingD);
      break;
    }
  }
  return arr;
};
export { diStringMatch };
