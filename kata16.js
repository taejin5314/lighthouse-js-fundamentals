const makeCase = function (input, selectedCase) {
  // selectedCase to array
  let caseArray = [];
  let newString = input;
  if (typeof selectedCase === 'string') {
    caseArray = selectedCase.split();
  } else {
    caseArray = selectedCase;
  }

  for (let i = 0; i < caseArray.length; i++) {
    let temp = '';
    if (caseArray[i] === 'camel') {
      for (let j = 0; j < newString.length; j++) {
        if (newString[j - 1] === ' ') {
          temp += newString[j].toUpperCase();
        } else if (newString[j] !== ' ') {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'pascal') {
      for (let j = 0; j < newString.length; j++) {
        if (newString[j - 1] === ' ') {
          temp += newString[j].toUpperCase();
        } else if (j === 0 && newString[j] !== ' ') {
          temp += newString[j].toUpperCase();
        } else if (newString[j] !== ' ') {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'snake') {
    } else if (caseArray[i] === 'kebab') {
    } else if (caseArray[i] === 'title') {
    } else if (caseArray[i] === 'vowel') {
    } else if (caseArray[i] === 'consonant') {
    } else if (caseArray[i] === 'upper') {
      newString = newString.toUpperCase();
    } else if (caseArray[i] === 'lower') {
      newString = newString.toLowerCase();
    }
  }
  return newString;
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));
