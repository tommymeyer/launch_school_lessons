function indexOf(a, b) {
  var limit = a.length - b.length;
  var matchCount;

  for (var i = 0; i < limit; i++) {
    matchCount = 0;
  }

  for (var j = 0; j < b.length; j++) {
    if (a[i + j] === b[j]) {
      matchCount++;
    } else {
      break;
    }

    if (matchCount === b.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(c, d) {
  var limit = c.length - d.length;
  var matchCount;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0;
  }

  for (var j = 0; j < d.length; j++) {
    if (c[i + j] === d[j]) {
      matchCount++;
    } else {
      break;
    }

    if (matchCount === b.length) {
      return i;
    }
  }

  return -1;
}