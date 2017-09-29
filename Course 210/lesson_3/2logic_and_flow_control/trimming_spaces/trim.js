function trim(str) {
  var trimmed = trimLeft(str);
  trimmed = trimRight(trimmed);
  
  return trimmed;
}

function trimLeft(str) {
  var newStr = "";
  var copyMode = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      copyMode = true;
    }

    if (copyMode === true) {
      newStr += str[i];
    }
  }

  return newStr;
}

  function trimRight(str){
  var newStr = "";
  var copyMode = false;

  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      copyMode = true;
    }

    if (copyMode === true) {
      newStr = str[i] + newStr;
    }
  }

  return newStr;
}