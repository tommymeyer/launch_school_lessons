function substr(string, start, length) {
  var newStr = "";
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newStr += string[index];
  }

  return newStr;
}