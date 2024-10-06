const assertEqObjects = (object1, object2) => {
  const inspect = require("util").inspect;
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`🛑🛑🛑 Objects are different lengths. Object 1 length: ${Object.keys(object1).length} Object 2 length: ${Object.keys(object2).length}`)
  } 
  for(key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
      console.log("🛑🛑🛑 Arrays in objects are not equal.")
      }
    } else if(object1[key] !== object2[key]) {
      console.log(`🛑🛑🛑 Key:Value pairs are not equal. ${inspect(object1[key])} !== ${inspect(object2[key])}`)
    } 
  }
  console.log("✔✔✔ Objects are equal")
}

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}