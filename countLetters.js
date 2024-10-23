const assertEqual = require("./assertEqual")

const countLetters = (string) => {
  let counter = {}
  for(letter of string) {
    if(letter === " ") {
      continue
    } else { 
    counter[letter] = (counter[letter] ?? 0) + 1
    }
  }
    return counter
  }


// TEST CODE
let test = countLetters("apples")

assertEqual(test["a"], 1)
assertEqual(test["p"], 2)
assertEqual(test["l"], 1)
assertEqual(test["e"], 1)
assertEqual(test["s"], 1)

module.exports = {countLetters}