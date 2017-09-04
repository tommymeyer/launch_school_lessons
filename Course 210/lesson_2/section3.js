// ***Exercise 1***
// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }

// console.log(average(2, 4, 8));


// ***Exercise 2***
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 4, 8));


// ***Exercise 3***
var total;

function average(array) {
  return sum(array) / array.length;
}


// ***Exercise 4***
function sum(array) {
  total = 0;

  for (var i = 0, leng = array.length; i < leng; i++) {
    total += array[i];
  }

  return total;
}

// console.log(average([2, 4, 8]));


// ***Exercise 5***
var temperatures = [90, 110, 105, 115, 97];

console.log(average(temperatures));