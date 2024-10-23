const assertEqual = require("./assertEqual")

const head = (arr) => arr[0]

// TEST CODE

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hell");
assertEqual(head(),);

module.exports = {head}