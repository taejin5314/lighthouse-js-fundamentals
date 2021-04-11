const urlEncode = function (text) {
  // Put your solution here
  let newString = '';
  for (let i = 0; i < text.length; i++) {
    if (i === 0 && text[i] === ' ') {
      newString += '';
    } else if (i === text.length - 1 && text[i] === ' ') {
      newString += '';
    } else if (text[i] === ' ') {
      newString += '%20';
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
