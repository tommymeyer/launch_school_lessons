// First set of Array Exercises
// 1.
// function lastInArray(n) {
//   for ()
// }

// 2
var names = ['Jim', 'Bob', 'Joe'];

function rollCall(nomen) {
  for (var i = 0; i < nomen.length; i++) {
    console.log(nomen[i]);
  }
}

// 3 solution 1
// var array = [1, 2, 3, 4];
//
// function reverse(are) {
//   for (var i = array.length - 1; i >= 0; i--) {
//     console.log(are[i]);
//   }
// }

// solution 2 (LS solution)
var array = [1, 2, 3, 4];

function reverse(are) {
  var reversedArray = [];
  for (var i = are.length - 1; i >= 0; i--) {
    reversedArray.push(are[i]);
  }

  return reversedArray;
}

// 4
function firstInstance(n, arr) {
  var position = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      position = i;
      break;
    }
  }

  return position;
}

// 5
