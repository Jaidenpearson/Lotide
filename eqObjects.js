const assertEqual = require("./assertEqual")
const eqArrays = require("./eqArrays")

const eqObjects = (object1, object2) => {
  if(Object.keys(object1).length !== Object.keys(object2).length) { // Checks if objects are the same length
    return false
  } 
  for(key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) { //Checks arrays in object to see if they are equal
      if(!eqArrays(object1[key], object2[key])) {
      return false
      }
    } else if(object1[key] !== object2[key]) {
      return false
    } 
  }
  return true
}

// TEST CODE

const student1 = {name: "Jesse", age: 25, gender: "non-binary"}
const student2 = {name: "Markus", age: 77, gender: "male"}
const student3 = {name: "Fiona", age: 37, gender: "Female"}
const twinOfStudent2WhoseParentsDontLoveThem = {name: "Markus", age: 77, gender: "male"}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

assertEqual(eqObjects(student1, student3), false) 
assertEqual(eqObjects(student2, twinOfStudent2WhoseParentsDontLoveThem), true)

module.exports = eqObjects
