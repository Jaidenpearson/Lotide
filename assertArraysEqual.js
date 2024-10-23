const assertArraysEqual = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    console.log("🛑🛑🛑Arrays are different lengths") //Checks array lengths and gives error message if different
    return
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑Index: ${[i]} is not equal between arrays`) //Logs if arrays are false
      return
    }
  }
  console.log("✔✔✔Arrays are identical") //Happy days
}

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])

module.exports = assertArraysEqual
