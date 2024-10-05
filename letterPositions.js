const letterPositions = function (string) {
  let sentence = string.toLowerCase()
  const results = {};
  for(i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
      continue
    } else if(results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  }
  console.log(results)
  return results;
};

let hello = letterPositions("hello")
let anotherTest = letterPositions("This and that")

