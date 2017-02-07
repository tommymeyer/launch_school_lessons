// Section 10: Intermediate Array Uses
var array1 = [1, "A", 3, 4, "B", 6, "C", 8, 9, "D"];
var array2 = ["E", 2, "F", "G", 5, "H", 7, "I", "J", 10];
var array3 = [1, 2, 3, 4];
var arrays = [[1, 2], [3, 4, 5], [6, 7], [8]];
var array4 = [1, 1, 2, 2, 3, 3, 4, 4];
var array5 = [-1, 3, 4, 6, 9];

// 1.
// ===My Solution===
// function oddElOf(arr) {
//   var newArr = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//       newArr.push(arr[i]);
//     }
//   }
//
//   return newArr;
// }

// ===LS Solution===
// function oddElementsOf(arr) {
//   var oddElements = [];
//
//   for (var i = 1, length = arr.length; i < length; i += 2) {
//     oddElements.push(arr[i]);
//   }
//
//   return oddElements;
// }

// 2.
// function combinedArrays(even, odd) {
//   var newArr = [];
//
//   for (var i = 0; i < even.length; i++) {
//       newArr.push(even[i]);
//       newArr.push(odd[i]);
//   }
//
//   return newArr;
// }

// 3.
// ===My Solution===
// function frackwards(arr) {
//   var newArr = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//
//   for (var j = arr.length - 1; j >= 0; j--) {
//     newArr.push(arr[j]);
//   }
//
//   return newArr;
// }

// ===LS Solution===
// function mirroredArray(arr) {
//   return arr.concat(arr.slice().reverse());
// }

// 4.
// function joinArray(arr, joiner) {
//   var newArr = arr[0].toString();
//   joiner = joiner || '';
//
//   for (var i = 1; i < arr.length; i++) {
//     newArr += joiner + arr[i].toString();
//   }
//
//   return newArr;
// }

// 5.
// function sortDesc(arr) {
//   var arrCopy = arr.slice();
//   return arrCopy.sort(function(a, b) {
//     return b - a;
//   });
// }

// 6.
// function arrayOfArray(arr) {
//   var newArr = [];
//   var currentSum;
//
//   for (var i = 0; i < arr.length; i++) {
//     currentSum = 0;
//
//     for (var j = 0; j < arr[i].length; j++) {
//       currentSum += arr[i][j];
//     }
//
//     newArr.push(currentSum);
//   }
//
//   return newArr;
// }

// 7.
// function removeDupes(arr) {
//   var newArr = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//
//   return newArr;
// }

// Section 11: Find Missing Numbers
function missingNo(arr) {
  var newArr = [];

  for (var i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) < 0) {
      newArr.push(i);
    }
  }

  return newArr;
}
