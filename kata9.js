const camelCase = function (input) {
  // Set an empty string variable
  let newString = '';
  let index = 0;
  while (index < input.length) {
    if (input[index] === ' ') {
      // if the element is a space, add the upper case of next element to the new string.
      newString += input[index + 1].toUpperCase();
      index++;
    } else {
      // if the element is not a space, add it to the new string.
      newString += input[index];
    }
    index++;
  }
  // return the new string.
  return newString;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
