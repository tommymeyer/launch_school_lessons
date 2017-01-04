function primeCheck(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  var num1 = 1;
  var num2;
  var found;

  do {
    num1++;
    num2 = n - num1;
    if (primeCheck(num1) && primeCheck(num2)) {
      found = true;
      console.log(num1, num2);
    }

  } while (num1 !== num2);

  if (!found) {
    console.log(null);
  }
}
