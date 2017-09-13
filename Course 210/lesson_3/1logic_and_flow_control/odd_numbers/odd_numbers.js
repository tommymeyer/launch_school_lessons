function printOddNumbers(n) {
  for (var i = 1; i <= n; i += 2) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}
