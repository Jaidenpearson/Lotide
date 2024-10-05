const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

let countOnly = (arr, objectToCount) => {
  let guestCount = {}
  for(key in objectToCount) {
    if(objectToCount[key] !== true) {
      return
    } else {
      for(value in arr) {
        if(value === key) {
          guestCount[key] + 1
        }
      }
    }
  }
  console.log(guestCount)
  return guestCount
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// COUNTONLY TEST CODE

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);