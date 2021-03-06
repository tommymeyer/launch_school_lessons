// First set of Array Exercises
// 1
var arr = [1, 2, 3, 4, 5];

function lastInArray(n) {
  var reverseArr = [];

  for (var i = n.length - 1; i >= 0; i--) {
    reverseArr.push(n[i]);
  }

  return reverseArr[0];
}

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
var isArray = [1, 'a', 4];

function la4(jibberish) {
  var newString = '';

  for (var i = 0; i < jibberish.length; i++) {
    newString += jibberish[i].toString();
  }

  return newString;
}
