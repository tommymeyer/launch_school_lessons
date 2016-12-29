function multiples(number) {
  for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}
