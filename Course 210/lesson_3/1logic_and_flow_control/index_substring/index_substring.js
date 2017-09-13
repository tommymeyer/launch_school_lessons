function indexOf(string1, string2) {
  var limit = string1.length - string2.length;
  var matchCount;

  for (var i = 0; i <= limit; i++) {
    matchCount = 0;

    for (var j = 0; j < string2.length; j++) {
      if (string1[i + j] === string2[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === string2.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(string1, string2) {
  var limit = string1.length - string2.length;
  var matchCount;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0;

    for (var j = 0; j < string2.length; j++) {
      if (string1[i + j] === string2[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === string2.length) {
      return i;
    }
  }

  return -1;
}
