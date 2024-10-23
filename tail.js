const assertEqual = require("./assertEqual")

const tail = (arr) => arr.slice(1)

// TAIL TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Lab");

module.exports = tail