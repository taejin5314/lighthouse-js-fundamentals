const urlDecode = function (text) {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    // convert %20 to ' ' and add it to a new string.
    if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      newText += ' ';
      i += 2;
    } else {
      newText += text[i];
    }
  }
  // split the string at the '&' sign.
  let textArray = newText.split('&');
  let textObject = {};
  for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < textArray[i].length; j++) {
      if (textArray[i][j] === '=') {
        // before '=', it will be a key name.
        let key = textArray[i].slice(0, j);
        // after '=', it will be a value name.
        let value = textArray[i].slice(j + 1, textArray[i].length);
        textObject[key] = value;
        break;
      }
    }
  }
  return textObject;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
