function pattern(n) {
  var str;

  for (var i = 1; i <= n; i++) {
    str = "";

    for (var j = 1; j <= i; j++) {
      str += String(j);
    }

    for (var k = i + 1; k <= n; k++) {
      str += "*";
    }

    console.log(str);
  }
}