const squareCode = function (message) {
  // Put your solution here
  let newMessage = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== ' ') {
      newMessage += message[i];
    }
  }

  let squaredMessage = [];
  const col = Math.ceil(Math.sqrt(newMessage.length));
  const row = Math.round(newMessage.length / col);
  for (i = 0; i < row; i++) {
    squaredMessage.push(newMessage.slice(i * col, (i + 1) * col));
  }

  let reversedMessage = '';
  for (i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (squaredMessage[j][i]) reversedMessage += squaredMessage[j][i];
    }
    reversedMessage += ' ';
  }
  return reversedMessage;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(squareCode('if man was meant to stay on the ground god would have given us roots'));
