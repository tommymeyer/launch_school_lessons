function repeat(string, times) {
  var repeated = "";
  
  if (!isPositiveInteger(times)) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    repeated += string;
  }

  return repeated;

  function isPositiveInteger(value) {
    return Number(value) === value && value >= 0;
  }
}