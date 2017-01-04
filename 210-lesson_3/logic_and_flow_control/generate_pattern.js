function generatePattern(n) {
  var stars;

  for (var i = 1; i <= n; i++) {
    stars = '';

    for (var j = 1; j <= i; j++) {
      stars += String(j);
    }

    for (var k = i + 1; k <= n; k++) {
      stars += '*';
    }

    console.log(stars);
  }
}
