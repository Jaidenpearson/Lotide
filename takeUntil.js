const takeUntil = (array, callback) => {
  let result = []
  for(item of array) {
    if(callback(item)){ //Stops pushing from original array when callback returns true
      break
    } else {
      result.push(item)
    }
  }
  return result
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //[ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil