const assert = require("chai").assert
const letterPositions = require("../letterPositions")

describe("#letterPositions", () => {
  const hello = letterPositions("hello")
  const anotherTest = letterPositions("this and that")

  it("Returns [2, 3] from hello.l"), () => {
    assert.strictEqual(letterPositions(hello.l), [ 2, 3 ])
  }

  it("Returns [0, 9, 12] from anotherTest.t", () => {
    assert.strictEqual(letterPositions(anotherTest[t]), [ 0, 9, 12 ])
  })
})

// Test currently not working but works in main file with assertArraysEqual. 

// Did not have enough time to get working :( 