const assertArraysEqual = require("./assertArraysEqual")

let middle = (arr) => {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[(arr.length / 2) - 1]);
    result.push(arr[arr.length / 2]);
  } else if (arr.length % 2 !== 0) {
    result.push(arr[(arr.length - 1) / 2]);
  }
  console.log(result);
  return result
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

module.exports = {middle}