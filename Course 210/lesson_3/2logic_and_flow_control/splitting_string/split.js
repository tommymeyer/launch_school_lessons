function split(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter.");
    return;
  }

  var tempStr = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(tempStr);
      tempStr = "";
    } else if (delimiter === "") {
      console.log(string[i]);
    } else {
      tempStr += string[i];
    }
  }

  if (tempStr) {
    console.log(tempStr);
  }
}