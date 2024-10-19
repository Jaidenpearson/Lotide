const letterPositions = function (string) {
  const sentence = string.toString().toLowerCase()
  const results = {};
  for(i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") { // Doesn't count spaces
      continue
    } else if(results[sentence[i]]) {
      results[sentence[i]].push(i) // Pushes index into results object into an array that carries all the indexes
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  }
  return results; // returns object containing all the index places of each letter
};

// // TEST CODE

let hello = letterPositions("hello")
let anotherTest = letterPositions("This and that")

const assertArraysEqual = require("./assertArraysEqual")

assertArraysEqual(hello.h, [0])
assertArraysEqual(hello.e, [1])
assertArraysEqual(hello.l, [2, 3])
assertArraysEqual(hello.o, [4])


assertArraysEqual(anotherTest.t, [0, 9, 12])
assertArraysEqual(anotherTest.a, [5, 11])

console.log(hello.l)

module.exports = letterPositions