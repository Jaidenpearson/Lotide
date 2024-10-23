const assertArraysEqual = require("./assertArraysEqual")

const without = (source, remove) => {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray
};

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
let anArray = [5, 3, 7, 1, 3]
assertArraysEqual(without(anArray, [6, 2, 9, 3]), [5, 7, 1])

module.exports = without

