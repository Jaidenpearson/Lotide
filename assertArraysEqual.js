const assertArraysEqual = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    console.log("Arrays are different lengths")
    return
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(`Index: ${[i]} is not equal between arrays`)
      return
    }
  }
  console.log("Arrays are identical")
}

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
