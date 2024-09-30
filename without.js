const without = function(source, remove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i])
    console.log(source[i])
    for (let j = 0; j < remove.length; j++) {
      if (newArray[i] === remove[j]) {
        newArray.splice(i, 1);
      }
    }
  };
  console.log(newArray)
  return newArray
};

const assertArraysEqual = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    console.log("🛑🛑🛑Arrays are different lengths")
    return
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑Index: ${[i]} is not equal between arrays`)
      return
    }
  }
  console.log("✔✔✔Arrays are identical")
}

// const without = function(source, remove) {
//   let removedArray = []
//   for(items of source) {
//     for(info of remove) {
//       if(items === info) {
//         continue
//       }

//     }
//   }
//   console.log(removedArray)
// }

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"] 

