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
      // camelCase
      for (let j = 0; j < newString.length; j++) {
        if (newString[j - 1] === ' ') {
          temp += newString[j].toUpperCase();
        } else if (newString[j] !== ' ') {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'pascal') {
      // PascalCase
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
      // snake_case
      for (let j = 0; j < newString.length; j++) {
        if (newString[j] === ' ') {
          temp += '_';
        } else if (newString[j] !== ' ') {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'kebab') {
      // kebab-case
      for (let j = 0; j < newString.length; j++) {
        if (newString[j] === ' ') {
          temp += '-';
        } else if (newString[j] !== ' ') {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'title') {
      // Title Case
      for (let j = 0; j < newString.length; j++) {
        if (newString[j - 1] === ' ') {
          temp += newString[j].toUpperCase();
        } else if (j === 0 && newString[j] !== ' ') {
          temp += newString[j].toUpperCase();
        } else {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'vowel') {
      // vOwEl cAsE
      for (let j = 0; j < newString.length; j++) {
        if (newString[j] === 'a' || newString[j] === 'e' || newString[j] === 'i' || newString[j] === 'o' || newString[j] === 'u') {
          temp += newString[j].toUpperCase();
        } else {
          temp += newString[j];
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'consonant') {
      // CoNSoNaNT CaSe
      for (let j = 0; j < newString.length; j++) {
        if (newString[j] === 'a' || newString[j] === 'e' || newString[j] === 'i' || newString[j] === 'o' || newString[j] === 'u') {
          temp += newString[j].toLowerCase();
        } else {
          temp += newString[j].toUpperCase();
        }
      }
      newString = temp;
    } else if (caseArray[i] === 'upper') {
      // UPPERCASE
      newString = newString.toUpperCase();
    } else if (caseArray[i] === 'lower') {
      // lowercase
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
