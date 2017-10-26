function toLowerCase(string) {
  var offset = 32;
  var newStr = "";
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (string[i] >= "A" && string[i] <= "Z") {
      charCode += offset;
    }

    newStr += String.fromCharCode(charCode);
  }

  return newStr;
}