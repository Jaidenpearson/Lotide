const assertArraysEqual = require("./assertArraysEqual")


let map = (arr, callback) => {
  let results = []
  for(let item of arr) {
    results.push(callback(item))
  }
  return results
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

module.exports = {map}