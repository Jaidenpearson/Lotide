const letterPositions = function (string) {
  let sentence = string.toLowerCase()
  const results = {};
  for(i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
      continue
    } else if(results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  }
  console.log(results)
  return results;
};

// // TEST CODE

// let hello = letterPositions("hello")
// let anotherTest = letterPositions("This and that")

// assertArraysEqual(hello.h, [0])
// assertArraysEqual(hello.e, [1])
// assertArraysEqual(hello.l, [2, 3])
// assertArraysEqual(hello.o, [4])


// assertArraysEqual(anotherTest.t, [0, 9, 12])
// assertArraysEqual(anotherTest.a, [5, 11])

module.exports = letterPositions