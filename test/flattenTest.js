const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3] for [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  it("returns [2, 4, 6, 7, 8] from [2, [4, [6], 7], 8]", () => {
    assert.deepEqual(flatten([2, [4, [6], 7], 8]), [2, 4, 6, 7, 8]); 
  });
});

