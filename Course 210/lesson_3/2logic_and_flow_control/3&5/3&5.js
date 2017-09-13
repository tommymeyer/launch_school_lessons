function multiples() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + "!");
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}