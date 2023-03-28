// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/exercises/merge-two-sorted-lists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeTwoLists = void 0;
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function mergeTwoLists(list1, list2) {
  console.log(1111);
};
exports.mergeTwoLists = mergeTwoLists;
},{}],"src/exercises/binary-search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = void 0;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var calculateMid = function calculateMid(low, high) {
  return low + Math.floor((high - low) / 2);
};
// var search = function (nums, target) {
//   let low = 0;
//   let high = nums?.length - 1;
//   let mid = calculateMid(low, high);
//   while (target !== nums[mid]) {
//     if (target > nums[high] || target < nums[low]) return -1;
//     if (target > nums[mid]) {
//       low = mid + 1;
//       mid = calculateMid(low, high);
//     } else {
//       high = mid - 1;
//       mid = calculateMid(low, high);
//     }
//   }
//   return mid;
// };
var searchRecursion = function searchRecursion(nums, target, low, high) {
  var mid = calculateMid(low, high);
  if (target === nums[mid]) {
    return mid;
  }
  if (target > nums[high] || target < nums[low]) return -1;
  if (target > nums[mid]) {
    return searchRecursion(nums, target, mid + 1, high);
  }
  if (target < nums[mid]) {
    return searchRecursion(nums, target, low, mid - 1);
  }
};
var search = function search(nums, target) {
  var low = 0;
  var high = nums.length - 1;
  var result = searchRecursion(nums, target, low, high);
  return result;
};
exports.search = search;
},{}],"src/exercises/searchInsertPosition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchInsert = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var calculateMid = function calculateMid(low, high) {
  return low + Math.floor((high - low) / 2);
};
var search = function search(nums, target) {
  var low = 0;
  var high = (nums === null || nums === void 0 ? void 0 : nums.length) - 1;
  var mid = calculateMid(low, high);
  while (target !== nums[mid]) {
    if (target > nums[high] || target < nums[low]) return -1;
    if (target > nums[mid]) {
      low = mid + 1;
      mid = calculateMid(low, high);
    } else {
      high = mid - 1;
      mid = calculateMid(low, high);
    }
  }
  return mid;
};
var searchInsert = function searchInsert(nums, target) {
  var newNums = [].concat(_toConsumableArray(nums), [target]).sort(function (a, b) {
    return a - b;
  });
  newNums = _toConsumableArray(new Set(newNums));
  return search(newNums, target);
};
exports.searchInsert = searchInsert;
},{}],"src/exercises/findTargetIndiceAfterSortingArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.targetIndices = void 0;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var calculateMid = function calculateMid(low, high) {
  return low + Math.floor((high - low) / 2);
};
var getIndice = function getIndice(nums, target, low, high) {
  var indices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var mid = calculateMid(low, high);
  if (low >= high) {
    if (nums[mid] === target) {
      return indices.unshift(high);
    } else return;
  }
  if (target === nums[mid]) {
    indices.unshift(high);
    if (low === 0) {
      getIndice(nums, target, 0, mid, indices);
    } else {
      getIndice(nums, target, mid, high, indices);
    }
  }
  return indices;
};
var targetIndices = function targetIndices(nums, target) {
  var newNums = nums.sort(function (a, b) {
    return a - b;
  });
  var low = 0;
  var high = newNums.length - 1;
  var mid = calculateMid(low, high);
  // let indicesLeft = getIndice(newNums, target, 0, mid);
  var indicesRight = getIndice(newNums, target, mid, high);
  // while (low < high) {
  //   if (target === newNums[mid]) {
  //   }
  // }
  // return [...indicesLeft, ...indicesRight];
  return indicesRight;
};
exports.targetIndices = targetIndices;
},{}],"src/exercises/maximunNestingDepthParentases.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxDepth = void 0;
/**
 * @param {string} s
 * @return {number}
 */
var isSingleParentheses = function isSingleParentheses(char) {
  return char === ')' || char === '(';
};
var isDoubleParentheses = function isDoubleParentheses(arr) {
  return arr[0] === '(' && arr[1] === ')';
};
var isOperator = function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
};
var maxDepth = function maxDepth(s) {
  var stack = [];
  var count = 0;
  var max = 0;
  for (var index = 0; index < (s === null || s === void 0 ? void 0 : s.length); index++) {
    var char = s[index];
    if (char === '(') {
      stack.push(char);
      if ((stack === null || stack === void 0 ? void 0 : stack.length) > max) max = stack.length;
    } else if (char === ')') {
      stack.pop();
    }
  }
  console.log('max', max);
  return max;
};
exports.maxDepth = maxDepth;
},{}],"src/exercises/removeOutermostParenthases.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeOuterParentheses = void 0;
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function removeOuterParentheses(s) {
  var _result;
  var stack = [];
  var result = [];
  var max = 0;
  var previousIndex = 0;
  for (var index = 0; index < (s === null || s === void 0 ? void 0 : s.length); index++) {
    var char = s[index];
    if (char === '(') {
      stack.push(char);
      if (stack.length === 1) {
        previousIndex = index;
      }
    } else if (char === ')') {
      stack.pop();
      if ((stack === null || stack === void 0 ? void 0 : stack.length) === 0) {
        var child = s.substring(previousIndex, index + 1);
        result.push(child);
      }
    }
  }
  result = (_result = result) === null || _result === void 0 ? void 0 : _result.map(function (item) {
    return item.substring(1, (item === null || item === void 0 ? void 0 : item.length) - 1);
  }).reduce(function (pre, current) {
    return pre += current;
  }, '');
  console.log(result);
  return result;
};
exports.removeOuterParentheses = removeOuterParentheses;
},{}],"src/exercises/findPriceWithSpecialDiscount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalPrices = void 0;
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function finalPrices(prices) {
  var stack = [prices[0]];
  var result = [];
  var lastIndex = 0;
  for (var index = 1; index < (prices === null || prices === void 0 ? void 0 : prices.length); index++) {
    console.log('====', prices[index]);
    console.log('stack: ', stack);
    console.log('result: ', result);
    // if (index > lastIndex && prices[index] <= stack[stack.length - 1]) {
    //   result.push(stack[stack.length - 1] - prices[index]);
    //   let last = stack.pop();
    //   console.log('last:', last);
    //   stack.push(prices[index]);
    //   lastIndex = index;
    //   continue;
    // }
    if (index > lastIndex && prices[index] > stack[stack.length - 1]) {
      stack.unshift(prices[index]);
      lastIndex = index;
      continue;
    }
    while (index > lastIndex && prices[index] <= stack[stack.length - 1] && (stack === null || stack === void 0 ? void 0 : stack.length) > 0) {
      result.push(stack[stack.length - 1] - prices[index]);
      stack.pop();
    }
    stack.push(prices[index]);
    continue;

    // if (stack?.length === 0) {
    //   stack.push(prices[index]);
    //   lastIndex = index;
    //   continue;
    // }
    // if (prices[index] <= stack[stack.length - 1]) {
    //   result.push(stack[0] - prices[index]);
    //   stack.pop();
    // } else {
    //   stack.shift(prices[index]);
    // }
  }
};
exports.finalPrices = finalPrices;
},{}],"src/exercises/baseballGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calPoints = void 0;
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function calPoints(operations) {
  var stack = [];
  for (var index = 0; index < (operations === null || operations === void 0 ? void 0 : operations.length); index++) {
    var operator = operations[index];
    if (!isNaN(operator)) {
      stack.push(parseInt(operator, 10));
    } else if (operator === 'C') {
      stack.pop();
    } else if (operator === 'D') {
      var last = [].concat(stack).pop();
      stack.push(last * 2);
    } else if (operator === '+') {
      var op1 = stack[(stack === null || stack === void 0 ? void 0 : stack.length) - 1];
      var op2 = stack[(stack === null || stack === void 0 ? void 0 : stack.length) - 2];
      stack.push(op1 + op2);
    }
  }
  return stack.reduce(function (total, current) {
    return total + current;
  }, 0);
  console.log('==== stack ===', stack);
};
exports.calPoints = calPoints;
},{}],"src/exercises/removeAllDuplicateAdjacent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDuplicates = void 0;
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function removeDuplicates(s) {
  var stack = [];
  for (var index = 0; index < (s === null || s === void 0 ? void 0 : s.length); index++) {
    var char = s[index];
    var last = stack[(stack === null || stack === void 0 ? void 0 : stack.length) - 1];
    if (char === last) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  return stack.join('');
};
exports.removeDuplicates = removeDuplicates;
},{}],"src/exercises/1700.Number_of_student_unable_to_eat_lunch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countStudents = void 0;
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function countStudents(students, sandwiches) {
  var flag = true;
  while (flag) {
    if ((students === null || students === void 0 ? void 0 : students.length) === 0) return 0;
    var setStudent = new Set(students);
    if (setStudent.size === 1 && students[0] !== sandwiches[0]) {
      flag = false;
      return students === null || students === void 0 ? void 0 : students.length;
    }
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      continue;
    } else {
      var firstStudent = students.shift();
      students.push(firstStudent);
      continue;
    }
  }
};
exports.countStudents = countStudents;
},{}],"src/exercises/2073.Time_Needed_to_Buy_Tickets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeRequiredToBuy = void 0;
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function timeRequiredToBuy(tickets, k) {
  var time = 0;
  var len = parseInt(tickets === null || tickets === void 0 ? void 0 : tickets.length, 10);
  // let min = parseInt(Math.min(...tickets), 10);
  // console.log('min', min);
  // tickets = tickets?.map((ticket) => {
  //   return parseInt(ticket, 10) - min;
  // });
  // time += min * len;
  // if (tickets[k] === 0) return time;
  var trackingIndex = k;
  while (tickets[trackingIndex] !== 0) {
    if (tickets[0] === 0) {
      tickets.shift();
      tickets.push(0);
      trackingIndex--;
      continue;
    }
    if (tickets[0] !== 0) {
      time += 1;
      var firstTicket = tickets.shift();
      tickets.push(firstTicket - 1);
      if (trackingIndex === 0) trackingIndex = len - 1;else trackingIndex--;
      continue;
    }
  }
  console.log('tickets:', tickets);
  console.log('time:', time);
  return time;
};
exports.timeRequiredToBuy = timeRequiredToBuy;
},{}],"src/exercises/387.First_Unique_Character_in_a_String.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstUniqChar = void 0;
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function firstUniqChar(s) {
  var stack = [s[0]];
  var trackingIndex = 0;
  for (var index = 1; index < s.length; index++) {
    var char = s[index];
    if (char === stack[0]) {
      stack.shift();
      trackingIndex++;
    } else {
      stack.push(char);
    }
  }
  if ((stack === null || stack === void 0 ? void 0 : stack.length) === 0) return -1;
  return trackingIndex;
};
exports.firstUniqChar = firstUniqChar;
},{}],"src/exercises/771.Jewels_and_Stones.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numJewelsInStones = void 0;
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var PI = Math.PI;
var hash = function hash(char, len) {
  return Math.floor(len * (char.charCodeAt(0) * PI % 1));
};
var numJewelsInStones = function numJewelsInStones(jewels, stones) {
  var len = stones === null || stones === void 0 ? void 0 : stones.length;
  var hashTable = [];
  console.log('hashTable:', hashTable);
  for (var index = 0; index < (stones === null || stones === void 0 ? void 0 : stones.length); index++) {
    var _hashTable$hashIndex;
    var char = stones[index];
    var hashIndex = hash(char, len);
    console.log('index:', hashIndex);
    console.log('hashTable:', hashTable[hashIndex]);
    if ((hashTable === null || hashTable === void 0 ? void 0 : (_hashTable$hashIndex = hashTable[hashIndex]) === null || _hashTable$hashIndex === void 0 ? void 0 : _hashTable$hashIndex.length) === undefined) {
      hashTable[hashIndex] = [];
      hashTable[hashIndex].push(char);
      continue;
    }
    hashTable[hashIndex].push(char);
  }
  var count = 0;
  for (var _index = 0; _index < (jewels === null || jewels === void 0 ? void 0 : jewels.length); _index++) {
    var _hashTable$_hashIndex;
    var _char = stones[_index];
    var _hashIndex = hash(_char, len);
    count += (_hashTable$_hashIndex = hashTable[_hashIndex]) === null || _hashTable$_hashIndex === void 0 ? void 0 : _hashTable$_hashIndex.length;
  }
  console.log('hashTable:', hashTable);
  return count;
};
exports.numJewelsInStones = numJewelsInStones;
},{}],"src/exercises/2325.Decode_the_Message.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeMessage = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var generateHashTable = function generateHashTable(string) {
  var newString = _toConsumableArray(new Set(string.replaceAll(' ', '').split('')));
  console.log(newString);
  var hashTB = new Map();
  for (var index = 0; index < (newString === null || newString === void 0 ? void 0 : newString.length); index++) {
    var char = newString[index];
    console.log("".concat(char, ":"), String.fromCharCode(index + 97));
    if (!hashTB.has(char)) {
      hashTB.set(char, String.fromCharCode(index + 97));
    }
  }
  return hashTB;
};
var decodeMessage = function decodeMessage(key, message) {
  var hashTable = generateHashTable(key);
  var result = '';
  for (var index = 0; index < (message === null || message === void 0 ? void 0 : message.length); index++) {
    var char = message[index];
    if (char === ' ') {
      result += ' ';
      continue;
    }
    result += hashTable.get(char);
  }
  console.log('==== hashTable', _toConsumableArray(hashTable.entries()));
  return result;
};
exports.decodeMessage = decodeMessage;
},{}],"src/exercises/2367.Number_of_Arithmetic_Triplets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arithmeticTriplets = void 0;
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function arithmeticTriplets(nums, diff) {
  var result = 0;
  for (var i = 0; i < (nums === null || nums === void 0 ? void 0 : nums.length); i++) {
    var item = nums[i];
    var stack = [item];
    for (var j = i + 1; j < (nums === null || nums === void 0 ? void 0 : nums.length); j++) {
      var last = [].concat(stack).pop();
      if (nums[j] - last === diff) {
        stack.push(nums[j]);
        console.log('stack:', stack);
      }
      if ((stack === null || stack === void 0 ? void 0 : stack.length) === 3) {
        result++;
        break;
      }
    }
  }
  return result;
};
exports.arithmeticTriplets = arithmeticTriplets;
},{}],"src/exercises/1832.Check_if_the_Sentence_Is_Pangram.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfPangram = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function checkIfPangram(sentence) {
  var hashMap = new Map();
  for (var index = 0; index < (sentence === null || sentence === void 0 ? void 0 : sentence.length); index++) {
    var char = sentence[index];
    if (!hashMap.has(char)) {
      hashMap.set(char, 1);
      continue;
    }
    var count = hashMap.get(char);
    hashMap.set(char, count + 1);
  }
  return _toConsumableArray(hashMap.values()).every(function (item) {
    return item > 0;
  }) && hashMap.size === 26;
};
exports.checkIfPangram = checkIfPangram;
},{}],"src/exercises/557.Reverse_Words_in_a_String_III.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseWords = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} s
 * @return {string}
 */
var swap = function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};
var reverseWords = function reverseWords(s) {
  var listWords = s.split(' ');
  var result = listWords.reduce(function (pre, current) {
    var _splitWord;
    var splitWord = current.split('');
    var i = 0,
      j = ((_splitWord = splitWord) === null || _splitWord === void 0 ? void 0 : _splitWord.length) - 1;
    while (i < j) {
      splitWord = swap(_toConsumableArray(splitWord), i, j);
      i++;
      j--;
    }
    return [].concat(_toConsumableArray(pre), [splitWord.join('')]);
  }, []);
  console.log(result);
  return result.join(' ');
};
exports.reverseWords = reverseWords;
},{}],"src/exercises/1768.Merge_Strings_Alternately.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAlternately = void 0;
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function mergeAlternately(word1, word2) {
  var p1 = 0,
    p2 = 0;
  var result = '';
  while (p1 < (word1 === null || word1 === void 0 ? void 0 : word1.length) && p2 < (word2 === null || word2 === void 0 ? void 0 : word2.length)) {
    var char1 = word1[p1];
    var char2 = word2[p2];
    var combine = char1 + char2;
    result += combine;
    p1++;
    p2++;
  }
  if (word1.length > (word2 === null || word2 === void 0 ? void 0 : word2.length)) {
    result += word1.substring(p1);
  } else {
    result += word2.substring(p2);
  }
  return result;
};
exports.mergeAlternately = mergeAlternately;
},{}],"src/exercises/1332.Remove_Palindromic_Subsequences.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePalindromeSub = void 0;
/**
 * @param {string} s
 * @return {number}
 */
var checkPalindrome = function checkPalindrome(string) {
  var _splitStr$reverse;
  var splitStr = string.split('');
  return (splitStr === null || splitStr === void 0 ? void 0 : splitStr.toString()) === ((_splitStr$reverse = splitStr.reverse()) === null || _splitStr$reverse === void 0 ? void 0 : _splitStr$reverse.toString());
};
var removePalindromeSub = function removePalindromeSub(s) {
  var temp = s.slice();
  var lo = 0;
  var hi = temp.length - 1;
  var result = 0;
  var stack = [];
  while (temp !== '') {
    while (lo <= hi) {
      if (temp[lo] === temp[hi]) {
        lo++;
        hi--;
      } else {
        stack.unshift(temp[hi]);
        hi--;
      }
    }
    result++;
    temp = stack.join('');
    stack = [];
  }
  return result;
};
exports.removePalindromeSub = removePalindromeSub;
},{}],"src/exercises/905.Sort_Array_By_Parity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortArrayByParity = void 0;
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var isEven = function isEven(num) {
  return num % 2 === 0;
};
var sortArrayByParity = function sortArrayByParity(nums) {
  var result = [];
  var lo = 0;
  var hi = nums.length - 1;
  while (lo <= hi) {
    if (lo === hi) {
      if (isEven(nums[lo])) {
        result.unshift(nums[lo]);
      } else {
        result.push(nums[lo]);
      }
      break;
    }
    if (isEven(nums[lo])) {
      result.unshift(nums[lo]);
    } else {
      result.push(nums[lo]);
    }
    if (isEven(nums[hi])) {
      result.unshift(nums[hi]);
    } else {
      result.push(nums[hi]);
    }
    lo++;
    hi--;
  }
  console.log(result);
  return result;
};
exports.sortArrayByParity = sortArrayByParity;
},{}],"src/exercises/821.Shortest_Distance_to_a_Character.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortestToChar = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var calculateDistance = function calculateDistance(a, b) {
  return Math.abs(a - b);
};
var findMinDistance = function findMinDistance(a, arr) {
  var distances = arr === null || arr === void 0 ? void 0 : arr.map(function (item) {
    return calculateDistance(a, item);
  });
  return Math.min.apply(Math, _toConsumableArray(distances));
};
var shortestToChar = function shortestToChar(s, c) {
  var arr = s.split('');
  var indices = arr === null || arr === void 0 ? void 0 : arr.reduce(function (pre, current, index) {
    if (current === c) return [].concat(_toConsumableArray(pre), [index]);else {
      return pre;
    }
  }, []);
  console.log('indices:', indices);
  console.log('arr:', arr);
  var result = [];
  arr === null || arr === void 0 ? void 0 : arr.map(function (item, index) {
    return index;
  }).forEach(function (item) {
    result.push(findMinDistance(item, indices));
  });
  console.log('result', result);
  return result;
};
exports.shortestToChar = shortestToChar;
},{}],"src/exercises/349.Intersection_of_Two_Arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function intersection(nums1, nums2) {
  var _ref, _ref$filter;
  var uniqueNums1 = _toConsumableArray(new Set(nums1));
  var uniqueNums2 = _toConsumableArray(new Set(nums2));
  var mergeNums = [].concat(_toConsumableArray(uniqueNums1), _toConsumableArray(uniqueNums2));
  console.log(mergeNums);
  var hash = new Map();
  mergeNums.forEach(function (item) {
    if (!hash.has(item)) {
      hash.set(item, 1);
    } else {
      hash.set(item, hash.get(item) + 1);
    }
  });
  console.log(_toConsumableArray(hash.entries()));
  return (_ref = _toConsumableArray(hash.entries())) === null || _ref === void 0 ? void 0 : (_ref$filter = _ref.filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return value > 1;
  })) === null || _ref$filter === void 0 ? void 0 : _ref$filter.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      key = _ref5[0],
      value = _ref5[1];
    return key;
  });
};
exports.intersection = intersection;
},{}],"src/exercises/922.Sort_Array_By_Parity_II.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortArrayByParityII = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var checkEvenOrOdd = function checkEvenOrOdd(num1, num2) {
  return (num1 + num2) % 2 === 0;
};
var sortArrayByParityII = function sortArrayByParityII(nums) {
  var lo = 0;
  var hi = nums.length - 1;
  var countEven = 0;
  var countOdd = (nums === null || nums === void 0 ? void 0 : nums.length) - 1;
  var result = [];
  var hash = new Map();
  while (lo <= hi) {
    if (lo === hi) {
      if (nums[lo] % 2 === 0) {
        hash.set(nums[lo], countEven);
      } else {
        hash.set(nums[lo], countOdd);
      }
      break;
    } else if (nums[lo] % 2 === 0) {
      hash.set(nums[lo], countEven);
      lo++;
      countEven += 2;
    } else if (nums[lo] % 2 !== 0) {
      console.log('countOdd', countOdd);
      hash.set(nums[lo], countOdd);
      lo++;
      countOdd -= 2;
      console.log('countOdd', countOdd);
    } else if (nums[hi] % 2 === 0) {
      hash.set(nums[hi], countEven);
      hi--;
      countEven += 2;
    } else if (nums[hi] % 2 !== 0) {
      hash.set(nums[hi], countOdd);
      hi--;
      countOdd -= 2;
    }
  }
  console.log(_toConsumableArray(hash.entries()));
  return result;
};
exports.sortArrayByParityII = sortArrayByParityII;
},{}],"src/exercises/2562.Find_the_Array_Concatenation_Value.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findTheArrayConcVal = void 0;
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function findTheArrayConcVal(nums) {
  var lo = 0;
  var hi = nums.length - 1;
  var result = 0;
  while (lo <= hi) {
    var concat = 0;
    if (lo === hi) {
      concat = parseInt("".concat(nums[lo]), 10);
    } else {
      concat = parseInt("".concat(nums[lo]).concat(nums[hi]), 10);
      lo++;
      hi--;
    }
    result += concat;
  }
  console.log(result);
  return result;
};
exports.findTheArrayConcVal = findTheArrayConcVal;
},{}],"src/exercises/917.Reverse_Only_Letters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseOnlyLetters = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} s
 * @return {string}
 */
var checkLetter = function checkLetter(char) {
  var n = char.charCodeAt(0);
  return n >= 65 && n < 91 || n >= 97 && n < 123;
};
var reverseOnlyLetters = function reverseOnlyLetters(s) {
  var lo = 0;
  var arr = s.split('');
  var hi = (arr === null || arr === void 0 ? void 0 : arr.length) - 1;
  while (lo <= hi) {
    console.log('lo', lo);
    console.log('hi', hi);
    if (lo === hi) {
      break;
    }
    if (checkLetter(arr[lo]) && checkLetter(arr[hi])) {
      var temp = arr[lo];
      arr.splice(lo, 1, arr[hi]);
      arr.splice(hi, 1, temp);
      console.log(_toConsumableArray(arr));
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
exports.reverseOnlyLetters = reverseOnlyLetters;
},{}],"src/exercises/1876.Substrings_of_Size_Three_with_Distinct_Characters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countGoodSubstrings = void 0;
/**
 * @param {string} s
 * @return {number}
 */
var checkDuplicate = function checkDuplicate(arr) {
  var _Set;
  return (arr === null || arr === void 0 ? void 0 : arr.length) === ((_Set = new Set(arr)) === null || _Set === void 0 ? void 0 : _Set.size);
};
var countGoodSubstrings = function countGoodSubstrings(s) {
  var count = 0;
  var index = 0;
  while (index <= (s === null || s === void 0 ? void 0 : s.length) - 3) {
    var sub = [s[index], s[index + 1], s[index + 2]];
    if (checkDuplicate(sub)) {
      count++;
    }
    index++;
  }
  console.log('count:', count);
  return count;
  // for(let index=0;index<s?.length;index++){
  // }
};
exports.countGoodSubstrings = countGoodSubstrings;
},{}],"src/exercises/1763.Longest_Nice_Substring.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longestNiceSubstring = exports.checkIsNiceString = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {string} s
 * @return {string}
 */
var checkIsLowerCase = function checkIsLowerCase(char) {
  return char === char.toLowerCase();
};
var checkIsUpperCase = function checkIsUpperCase(char) {
  return char === char.toUpperCase();
};
var checkIsNiceString = function checkIsNiceString(string) {
  var arr = _toConsumableArray(new Set(string.split('')));
  for (var i = 0; i < arr.length; i++) {
    var char = arr[i];
    var charCode = char.charCodeAt(0);
    if (checkIsLowerCase(char)) {
      var upperCase = String.fromCharCode(charCode - 32);
      if (!arr.includes(upperCase)) return false;
      continue;
    }
    if (checkIsUpperCase(char)) {
      var lowerCase = String.fromCharCode(charCode + 32);
      if (!arr.includes(lowerCase)) return false;
      continue;
    }
  }
  return true;
};
exports.checkIsNiceString = checkIsNiceString;
var longestNiceSubstring = function longestNiceSubstring(s) {
  var maxSub = '';
  for (var index = 0; index < (s === null || s === void 0 ? void 0 : s.length); index++) {
    var hi = s.length - 1;
    while (index <= hi) {
      var sub = s.substring(index, hi + 1);
      var check = checkIsNiceString(sub);
      if (check) {
        var _maxSub;
        if ((sub === null || sub === void 0 ? void 0 : sub.length) > ((_maxSub = maxSub) === null || _maxSub === void 0 ? void 0 : _maxSub.length)) {
          maxSub = sub;
        }
      }
      hi--;
    }
  }
  return maxSub;
};
exports.longestNiceSubstring = longestNiceSubstring;
},{}],"src/exercises/2269.Find_the_K-Beauty_of_a_Number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divisorSubstrings = void 0;
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function divisorSubstrings(num, k) {
  var count = 0;
  num = num.toString();
  for (var index = 0; index <= ((_num = num) === null || _num === void 0 ? void 0 : _num.length) - k; index++) {
    var _num;
    var sub = +num.substring(index, index + k);
    console.log('sub: ', sub);
    if (+num % sub === 0) {
      count++;
    }
  }
  return count;
};
exports.divisorSubstrings = divisorSubstrings;
},{}],"src/exercises/2379.Minimum_Recolors_to_Get_K_Consecutive_Black_Blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumRecolors = void 0;
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function minimumRecolors(blocks, k) {
  var maxBlackBlock = 0;
  var maxSub = '';
  for (var index = 0; index <= (blocks === null || blocks === void 0 ? void 0 : blocks.length) - k; index++) {
    var sub = blocks.substring(index, index + k);
    var countBlackBlock = (sub.match(/B/g) || []).length;
    if (countBlackBlock > maxBlackBlock) {
      maxBlackBlock = countBlackBlock;
      maxSub = sub;
    }
  }
  return (maxSub.match(/W/g) || []).length;
};
exports.minimumRecolors = minimumRecolors;
},{}],"src/exercises/1984.Minimum_Difference_Between_Highest_and_Lowest_of_K_Scores.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumDifference = void 0;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function minimumDifference(nums, k) {
  var min = +Infinity;
  var count = 0;
  // for (let index = 0; index < nums?.length; index++) {
  //   let tracking = index + 1;
  //   while (tracking <= nums?.length - k + 1) {
  //     count++;
  //     let rest = [...nums]?.splice(tracking, k - 1);
  //     let subArr = [nums[index], ...rest];
  //     console.log('subArr: ', subArr);
  //     let subMax = +Math.max(...subArr);
  //     let subMin = +Math.min(...subArr);
  //     let difference = subMax - subMin;
  //     console.log('difference: ', difference);
  //     if (difference < min) {
  //       min = difference;
  //       // break;
  //     }
  //     tracking++;
  //   }
  // }
  nums = nums.sort(function (a, b) {
    return b - a;
  });
  var tracking = 0;
  while (tracking <= ((_nums = nums) === null || _nums === void 0 ? void 0 : _nums.length) - k) {
    var _nums;
    var diff = nums[tracking] - nums[tracking + k - 1];
    if (diff < min) {
      min = diff;
    }
    tracking++;
  }
  console.log('count: ', count);
  return min;
};
exports.minimumDifference = minimumDifference;
},{}],"src/exercises/219.Contains_Duplicate_II.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containsNearbyDuplicate = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function containsNearbyDuplicate(nums, k) {
  var subtract = (nums === null || nums === void 0 ? void 0 : nums.length) > k ? k : 0;
  for (var index = 0; index < (nums === null || nums === void 0 ? void 0 : nums.length) - subtract; index++) {
    // let tracking = 1;
    // while (tracking <= k) {
    //   let arr = [...nums].splice(index, tracking + 1);
    //   console.log('arr: ', arr);
    //   // let arr = [nums[index], ...rest];
    //   const isDuplicate = arr?.length !== new Set(arr).size;
    //   if (isDuplicate) return true;
    //   tracking++;
    // }
    var arr = _toConsumableArray(nums).splice(index, k);
    console.log('arr: ', arr);
    // let arr = [nums[index], ...rest];
    var isDuplicate = (arr === null || arr === void 0 ? void 0 : arr.length) !== new Set(arr).size;
    if (isDuplicate) return true;
  }
  return false;
};
exports.containsNearbyDuplicate = containsNearbyDuplicate;
},{}],"src/exercises/2160.Minimum_Sum_of_Four_Digit_Number_After_Splitting_Digits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimumSum = void 0;
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function minimumSum(num) {
  var split = num.split('').sort(function (a, b) {
    return a - b;
  });
  var new1 = '';
  var new2 = '';
  while ((split === null || split === void 0 ? void 0 : split.length) !== 0) {
    new1 += split.shift();
    new2 += split.shift();
  }
  return +new1 + +new2;
};
exports.minimumSum = minimumSum;
},{}],"src/exercises/1221.Split_a_String_in_Balanced_Strings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.balancedStringSplit = void 0;
/**
 * @param {string} s
 * @return {number}
 */
var isBalance = function isBalance(str) {
  var _str$split, _str$split2;
  return ((_str$split = str.split('R')) === null || _str$split === void 0 ? void 0 : _str$split.length) === ((_str$split2 = str.split('L')) === null || _str$split2 === void 0 ? void 0 : _str$split2.length);
};
var balancedStringSplit = function balancedStringSplit(s) {
  var count = 0;
  for (var index = 0; index < (s === null || s === void 0 ? void 0 : s.length); index++) {
    var slide = 2;
    while (slide <= s.length) {
      var sub = s.substring(index, index + slide);
      console.log('sub: ', sub);
      if (isBalance(sub)) {
        count++;
        index += slide - 1;
        break;
      }
      slide++;
    }
  }
  return count;
};
exports.balancedStringSplit = balancedStringSplit;
},{}],"src/exercises/1827.Minimum_Operations_to_Make_the_Array_Increasing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minOperations = void 0;
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function minOperations(nums) {
  var previous = 0;
  var count = 0;
  for (var index = 1; index < nums.length; index++) {
    if (nums[index] <= nums[previous]) {
      count += nums[previous] + 1 - nums[index];
      nums[index] = nums[previous] + 1;
    }
    previous = index;
  }
  return count;
};
exports.minOperations = minOperations;
},{}],"src/exercises/942.DI_String_Match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diStringMatch = void 0;
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function diStringMatch(s) {
  var split = s.split('');
  var arr = [];
  var trackingI = 0;
  var trackingD = split === null || split === void 0 ? void 0 : split.length;
  if (split[0] === 'I') {
    arr = [0];
    trackingI++;
  } else {
    arr = [split.length];
    trackingD--;
  }
  for (var index = 1; index < (split === null || split === void 0 ? void 0 : split.length); index++) {
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
exports.diStringMatch = diStringMatch;
},{}],"src/exercises/561.Array_Partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayPairSum = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function arrayPairSum(nums) {
  var sorted = _toConsumableArray(nums).sort(function (a, b) {
    return a - b;
  });
  console.log(sorted);
  var result = 0;
  for (var index = 0; index <= sorted.length - 1; index += 2) {
    console.log(index);
    result += Math.min(sorted[index], sorted[index + 1]);
  }
  return result;
};
exports.arrayPairSum = arrayPairSum;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _mergeTwoSortedLists = require("../src/exercises/merge-two-sorted-lists");
var _binarySearch = require("../src/exercises/binary-search");
var _searchInsertPosition = require("../src/exercises/searchInsertPosition");
var _findTargetIndiceAfterSortingArray = require("../src/exercises/findTargetIndiceAfterSortingArray");
var _maximunNestingDepthParentases = require("../src/exercises/maximunNestingDepthParentases");
var _removeOutermostParenthases = require("../src/exercises/removeOutermostParenthases");
var _findPriceWithSpecialDiscount = require("../src/exercises/findPriceWithSpecialDiscount");
var _baseballGame = require("../src/exercises/baseballGame");
var _removeAllDuplicateAdjacent = require("../src/exercises/removeAllDuplicateAdjacent");
var _ = require("../src/exercises/1700.Number_of_student_unable_to_eat_lunch");
var _2 = require("../src/exercises/2073.Time_Needed_to_Buy_Tickets");
var _3 = require("../src/exercises/387.First_Unique_Character_in_a_String");
var _4 = require("../src/exercises/771.Jewels_and_Stones");
var _5 = require("../src/exercises/2325.Decode_the_Message");
var _6 = require("../src/exercises/2367.Number_of_Arithmetic_Triplets");
var _7 = require("../src/exercises/1832.Check_if_the_Sentence_Is_Pangram");
var _8 = require("../src/exercises/557.Reverse_Words_in_a_String_III");
var _9 = require("../src/exercises/1768.Merge_Strings_Alternately");
var _10 = require("../src/exercises/1332.Remove_Palindromic_Subsequences");
var _11 = require("../src/exercises/905.Sort_Array_By_Parity");
var _Shortest_Distance_to_a_Character = require("../src/exercises/821.Shortest_Distance_to_a_Character.js");
var _12 = require("../src/exercises/349.Intersection_of_Two_Arrays");
var _Sort_Array_By_Parity_II = require("../src/exercises/922.Sort_Array_By_Parity_II.js");
var _Find_the_Array_Concatenation_Value = require("../src/exercises/2562.Find_the_Array_Concatenation_Value.js");
var _Reverse_Only_Letters = require("../src/exercises/917.Reverse_Only_Letters.js");
var _Substrings_of_Size_Three_with_Distinct_Characters = require("../src/exercises/1876.Substrings_of_Size_Three_with_Distinct_Characters.js");
var _Longest_Nice_Substring = require("../src/exercises/1763.Longest_Nice_Substring.js");
var _Find_the_KBeauty_of_a_Number = require("../src/exercises/2269.Find_the_K-Beauty_of_a_Number.js");
var _Minimum_Recolors_to_Get_K_Consecutive_Black_Blocks = require("../src/exercises/2379.Minimum_Recolors_to_Get_K_Consecutive_Black_Blocks.js");
var _Minimum_Difference_Between_Highest_and_Lowest_of_K_Scores = require("../src/exercises/1984.Minimum_Difference_Between_Highest_and_Lowest_of_K_Scores.js");
var _Contains_Duplicate_II = require("../src/exercises/219.Contains_Duplicate_II.js");
var _Minimum_Sum_of_Four_Digit_Number_After_Splitting_Digits = require("../src/exercises/2160.Minimum_Sum_of_Four_Digit_Number_After_Splitting_Digits.js");
var _Split_a_String_in_Balanced_Strings = require("../src/exercises/1221.Split_a_String_in_Balanced_Strings.js");
var _Minimum_Operations_to_Make_the_Array_Increasing = require("../src/exercises/1827.Minimum_Operations_to_Make_the_Array_Increasing.js");
var _DI_String_Match = require("../src/exercises/942.DI_String_Match.js");
var _Array_Partition = require("../src/exercises/561.Array_Partition.js");
// import { minOperations } from '../src/exercises/1598.Crawler_Log_Folder';

var result = (0, _Array_Partition.arrayPairSum)([6, 2, 6, 5, 1, 2]);
console.log('result: ', result);
jjkkkkkjjjjkkjkjkjk;
},{"../src/exercises/merge-two-sorted-lists":"src/exercises/merge-two-sorted-lists.js","../src/exercises/binary-search":"src/exercises/binary-search.js","../src/exercises/searchInsertPosition":"src/exercises/searchInsertPosition.js","../src/exercises/findTargetIndiceAfterSortingArray":"src/exercises/findTargetIndiceAfterSortingArray.js","../src/exercises/maximunNestingDepthParentases":"src/exercises/maximunNestingDepthParentases.js","../src/exercises/removeOutermostParenthases":"src/exercises/removeOutermostParenthases.js","../src/exercises/findPriceWithSpecialDiscount":"src/exercises/findPriceWithSpecialDiscount.js","../src/exercises/baseballGame":"src/exercises/baseballGame.js","../src/exercises/removeAllDuplicateAdjacent":"src/exercises/removeAllDuplicateAdjacent.js","../src/exercises/1700.Number_of_student_unable_to_eat_lunch":"src/exercises/1700.Number_of_student_unable_to_eat_lunch.js","../src/exercises/2073.Time_Needed_to_Buy_Tickets":"src/exercises/2073.Time_Needed_to_Buy_Tickets.js","../src/exercises/387.First_Unique_Character_in_a_String":"src/exercises/387.First_Unique_Character_in_a_String.js","../src/exercises/771.Jewels_and_Stones":"src/exercises/771.Jewels_and_Stones.js","../src/exercises/2325.Decode_the_Message":"src/exercises/2325.Decode_the_Message.js","../src/exercises/2367.Number_of_Arithmetic_Triplets":"src/exercises/2367.Number_of_Arithmetic_Triplets.js","../src/exercises/1832.Check_if_the_Sentence_Is_Pangram":"src/exercises/1832.Check_if_the_Sentence_Is_Pangram.js","../src/exercises/557.Reverse_Words_in_a_String_III":"src/exercises/557.Reverse_Words_in_a_String_III.js","../src/exercises/1768.Merge_Strings_Alternately":"src/exercises/1768.Merge_Strings_Alternately.js","../src/exercises/1332.Remove_Palindromic_Subsequences":"src/exercises/1332.Remove_Palindromic_Subsequences.js","../src/exercises/905.Sort_Array_By_Parity":"src/exercises/905.Sort_Array_By_Parity.js","../src/exercises/821.Shortest_Distance_to_a_Character.js":"src/exercises/821.Shortest_Distance_to_a_Character.js","../src/exercises/349.Intersection_of_Two_Arrays":"src/exercises/349.Intersection_of_Two_Arrays.js","../src/exercises/922.Sort_Array_By_Parity_II.js":"src/exercises/922.Sort_Array_By_Parity_II.js","../src/exercises/2562.Find_the_Array_Concatenation_Value.js":"src/exercises/2562.Find_the_Array_Concatenation_Value.js","../src/exercises/917.Reverse_Only_Letters.js":"src/exercises/917.Reverse_Only_Letters.js","../src/exercises/1876.Substrings_of_Size_Three_with_Distinct_Characters.js":"src/exercises/1876.Substrings_of_Size_Three_with_Distinct_Characters.js","../src/exercises/1763.Longest_Nice_Substring.js":"src/exercises/1763.Longest_Nice_Substring.js","../src/exercises/2269.Find_the_K-Beauty_of_a_Number.js":"src/exercises/2269.Find_the_K-Beauty_of_a_Number.js","../src/exercises/2379.Minimum_Recolors_to_Get_K_Consecutive_Black_Blocks.js":"src/exercises/2379.Minimum_Recolors_to_Get_K_Consecutive_Black_Blocks.js","../src/exercises/1984.Minimum_Difference_Between_Highest_and_Lowest_of_K_Scores.js":"src/exercises/1984.Minimum_Difference_Between_Highest_and_Lowest_of_K_Scores.js","../src/exercises/219.Contains_Duplicate_II.js":"src/exercises/219.Contains_Duplicate_II.js","../src/exercises/2160.Minimum_Sum_of_Four_Digit_Number_After_Splitting_Digits.js":"src/exercises/2160.Minimum_Sum_of_Four_Digit_Number_After_Splitting_Digits.js","../src/exercises/1221.Split_a_String_in_Balanced_Strings.js":"src/exercises/1221.Split_a_String_in_Balanced_Strings.js","../src/exercises/1827.Minimum_Operations_to_Make_the_Array_Increasing.js":"src/exercises/1827.Minimum_Operations_to_Make_the_Array_Increasing.js","../src/exercises/942.DI_String_Match.js":"src/exercises/942.DI_String_Match.js","../src/exercises/561.Array_Partition.js":"src/exercises/561.Array_Partition.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42453" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map