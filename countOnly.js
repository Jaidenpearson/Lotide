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
    if(objectToCount[key] !== true) { // Checks if name to be counted is labelled as true. If false, function stops
      continue
    } else {
      for(value of arr) {
        if(value === key) {
          guestCount[key] = (guestCount[key] ?? 0) + 1 // Adds guest name count to guestCount object to be returned at end of function
      }
    }
  }
}
  return 
}

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});



// // COUNTONLY TEST CODE

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly