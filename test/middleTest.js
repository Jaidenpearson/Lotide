const assert = require('chai').assert
const middle = require("../middle")

describe("#middle", () => {
  it("Returns an empty array when given a single index", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("Returns two digits when given an array divisible by 2", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it("Returns a single value on odd indexed arrays", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
})

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]