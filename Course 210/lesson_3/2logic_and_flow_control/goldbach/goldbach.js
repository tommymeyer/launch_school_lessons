function isPrime(number) {
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

function goldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  var num1 = 1;
  var num2;

  do {
    num1++;
    num2 = n - num1;

    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }
  } while (num1 !== num2);
}