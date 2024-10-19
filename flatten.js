const flatten = (arr) => {
  let flattened = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

module.exports = flatten