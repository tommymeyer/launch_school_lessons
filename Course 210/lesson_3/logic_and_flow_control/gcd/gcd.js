function gcd(a, b) {
  while(b !== 0) {
    var c = b;
    b = a % b;
    a = c;
  }

  return a;
}
