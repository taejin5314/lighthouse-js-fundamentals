const sumLargestNumbers = function (data) {
  // Put your solution here
  let temp;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
