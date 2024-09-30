const without = function(source, remove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (newArray[i] === remove[j]) {
        newArray.splice(i, 1);
      }
    }
  };
  return newArray
};

// TEST CODE

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]