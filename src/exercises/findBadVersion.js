const calculateMid = (low, high) => {
  return low + Math.floor((high - low) / 2);
};
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let arr = Array(n)
      .fill(0)
      .map((e, i) => i + 1);
    let firstStatus = isBadVersion(arr[0]);
    if (firstStatus) return arr[0];
    let low = 0;
    let high = arr.length - 1;
    let mid = calculateMid(low, high);
    let status = isBadVersion(arr[mid]);
    while (!status) {
      low = mid + 1;
      mid = calculateMid(low, high);
      status = isBadVersion(arr[mid]);
    }
    return arr[mid];
  };
};
