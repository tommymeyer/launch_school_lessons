function splitString(string, delimiter) {
  if (typeof delimiter === 'undefined') {
    console.log('ERROR: No delimiter');
    return;
  }

  var tempString = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}
