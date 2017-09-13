function oddNumbers(n) {
  if (n % 2 === 0) {
    console.log("This is even.");
  }

  if(n % 2 === 1) {
    for (var i = 1; i <= n; i += 2) {
      console.log(i);
    }
  }
}