const repeatNumbers = function (data) {
  // set an empty string variable
  let output = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      output += data[i][0];
    }
    // prevent adding ', ' to the end of output
    if (i < data.length - 1) {
      output += ', ';
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
