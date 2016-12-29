function printMultiples(n) {
  for (var i = 100; i >= 0; i--) {
    if (i % 2 === 1 && i % n === 0) {
      console.log(i);
    }
  }
}
