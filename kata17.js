const urlDecode = function (text) {
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      newText += ' ';
      i += 2;
    } else {
      newText += text[i];
    }
  }
  let textArray = newText.split('&');
  let textObject = {};
  for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < textArray[i].length; j++) {
      if (textArray[i][j] === '=') {
      }
    }
  }
  return textArray;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
