const urlEncode = function (text) {
  // set a new empty string
  let newString = '';
  for (let i = 0; i < text.length; i++) {
    // trim the text
    if (i === 0 && text[i] === ' ') {
      newString += '';
      // trim the text
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
