// Generate a random number between 0 and 100.
const randomNumber = Math.round(Math.random() * 100);
// console.log(randomNumber);
let prompt = require('prompt-sync')();

let answerArray = [];
let count = 0;

// set the infinte loop
do {
  // user prompt
  let answer = parseInt(prompt('Guess a number: '));
  count++;
  let overlap = false;

  // if the type of answer is not a number
  if (isNaN(answer) === true) {
    console.log('Not a number! Try again!');
  } else {
    for (let i = 0; i < answerArray.length; i++) {
      // if there is an overlapped answer
      if (answerArray[i] === answer) {
        console.log('Already Guessed!');
        overlap = true;
      }
    }
    // if the answer is not overlapped
    if (!overlap) {
      // in the case the answer is higher
      if (answer > randomNumber) {
        console.log('Too High!');
        // in the case the answer is lower
      } else if (answer < randomNumber) {
        console.log('Too Low!');
        // if the answer is correct
      } else if (answer === randomNumber) {
        console.log(`You got it! You took ${count} attempts!`);
        return;
      }
      answerArray.push(answer);
    }
  }
} while (true);
