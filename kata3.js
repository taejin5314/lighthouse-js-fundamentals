const numberOfVowels = function (data) {
  // declare a count variable
  let count = 0;
  // separate the word in elements
  for (elm of data) {
    // if the element is vowel
    if (elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u') {
      count++;
    }
  }
  // return the count of vowels
  return count;
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
