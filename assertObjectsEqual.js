const eqArrays = require("./eqArrays")

const assertObjectsEqual = (object1, object2) => {
  const inspect = require("util").inspect;
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`🛑🛑🛑 Objects are different lengths. Object 1 length: ${Object.keys(object1).length} Object 2 length: ${Object.keys(object2).length}`) //Checks object lengths and sends error message if different
  } 
  for(key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
      console.log("🛑🛑🛑 Arrays in objects are not equal.") // Checks values within an array to determine if they are equal
      }
    } else if(object1[key] !== object2[key]) {
      console.log(`🛑🛑🛑 Key:Value pairs are not equal. ${inspect(object1[key])} !== ${inspect(object2[key])}`)
    } else {
      console.log("✔✔✔ Objects are equal")
      }
  } 
}

// TEST CODE

const student1 = {name: "Jesse", age: 25, gender: "non-binary"}
const student2 = {name: "Markus", age: 77, gender: "male"}
const student3 = {name: "Fiona", age: 37, gender: "Female"}
const twinOfStudent2WhoseParentsDontLoveThem = {name: "Markus", age: 77, gender: "male"}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); 
assertObjectsEqual(student1, student3)
assertObjectsEqual(student2, twinOfStudent2WhoseParentsDontLoveThem)

module.exports = assertObjectsEqual