const assertEqual = require("./assertEqual")

const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) { 
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], arr2[i])
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

module.exports = eqArrays