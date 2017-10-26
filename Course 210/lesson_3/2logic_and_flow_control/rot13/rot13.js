function rot13(string) {
  var decrypt = "";
  var rotPosition;

  for (var i = 0; i < string.length; i++) {
    rotPosition = string.charCodeAt(i);

    if ((rotPosition >= 65 && rotPosition <= 77) || (rotPosition >= 97 && rotPosition <= 109)) {
      rotPosition += 13;
    } else if ((rotPosition >= 78 && rotPosition <= 90) || (rotPosition >= 110 && rotPosition <= 122)) {
      rotPosition -= 13;
    }

    decrypt += String.fromCharCode(rotPosition);    
  }

  return decrypt;
}