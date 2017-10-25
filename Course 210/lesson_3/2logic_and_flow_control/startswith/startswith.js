function startsWith(str, srchStr) {
  var i;
  for (i = 0; i < srchStr.length; i += 1) {
    if (str[i] !== srchStr[i]) {
      return false;
    }
  }

  return true;
}