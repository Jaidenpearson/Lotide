const countLetters = (string) => {
  let counter = {}
  for(letter of string) {
    if(letter === " ") { // Doesn't count spaces as a letter
      continue
    } else { 
    counter[letter] = (counter[letter] ?? 0) + 1 // Adds letter with its count to the counter object to be returned
    }
  }
    return counter
  }


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// let test = countLetters("apples")

// assertEqual(test["a"], 1)
// assertEqual(test["p"], 2)
// assertEqual(test["l"], 1)
// assertEqual(test["e"], 1)
// assertEqual(test["s"], 1)

module.exports = countLetters