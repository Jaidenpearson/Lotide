const assert = require("chai").assert
const tail = require("../tail")

describe("#tail", () => {
  it("returns [2, 4, 5] from [1, 2, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 4, 5]), [2, 4, 5])
  })
  it("returns ['lighthouse'] from ['labs', 'ligthhouse']", () => {
    assert.deepEqual(tail(['labs', 'lighthouse']), ['lighthouse'])
  })
})

