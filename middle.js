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

module.exports = middle