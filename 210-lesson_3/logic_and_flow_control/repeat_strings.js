function repeat(string, times) {
  var repeated = '';

  if (isNaN(times) || times < 0) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    repeated += string;
  }

  return repeated;
}
