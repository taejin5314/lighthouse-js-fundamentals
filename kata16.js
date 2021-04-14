const makeCase = function (input, selectedCase) {
  // selectedCase to array
  var caseArray = [];
  if (typeof selectedCase === 'string') {
    caseArray = selectedCase.split();
  } else {
    caseArray = selectedCase;
  }

  for (let i = 0; i < caseArray.length; i++) {}
  return caseArray;
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));
