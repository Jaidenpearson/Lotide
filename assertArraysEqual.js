const eqArrays = require("./eqArrays")

const assertArraysEqual = (arr1, arr2) => {
  if (!eqArrays(arr1, arr2)) {
      console.log('🛑🛑🛑 Arrays are not equal')
      return
    } if (eqArrays(arr1, arr2)) {
      console.log("✔✔✔ arrays are equal")
    }
}



module.exports = assertArraysEqual
