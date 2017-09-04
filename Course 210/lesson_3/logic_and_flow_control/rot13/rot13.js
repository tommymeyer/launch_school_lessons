function rot13(string) {
  var decrypt = '';
  var rotPosition;

  for (var i = 0; i < string.length; i++) {
    // Turn each string index into its ASCII equivalent
    rotPosition = string.charCodeAt(i);

    // Swap the 'string' letter for the letter 13 positions away
    if ((rotPosition >= 65 && rotPosition <= 77) || (rotPosition >= 97 && rotPosition <= 109)) {
      rotPosition += 13;
    } else if ((rotPosition >= 78 && i <= 90) || (rotPosition >= 98 && i <= 122)) {
      rotPosition -= 13;
    }

    // Turn the letters' ASCII code back into a string to decrypt the cipher.
    decrypt += String.fromCharCode(rotPosition);
  }

  return decrypt;
}
