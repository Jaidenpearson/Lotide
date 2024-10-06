const eqObjects = (object1, object2) => {
  for(key in object1) {
      return object1[key] === object2[key] ? true : false
    }
  }

  const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

const student1 = {name: "Jesse", age: 25, gender: "non-binary"}
const student2 = {name: "Markus", age: 77, gender: "male"}
const student3 = {name: "Fiona", age: 37, gender: "Female"}
const twinOfStudent2WhoseParentsDontLoveThem = {name: "Markus", age: 77, gender: "male"}

assertEqual(eqObjects(student1, student3), false) 
assertEqual(eqObjects(student2, twinOfStudent2WhoseParentsDontLoveThem), true)