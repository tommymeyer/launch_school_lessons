// Section 8: Comparing Arrays
// var one = [1, 2, 3];
// var two = [1, 5, 4];
//
// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//
//   return true;
// }

// Section 9: Basic Array Uses
// 1
// var array = ["A", 2, 3, 4, 5];
//
// function firstElementOf(arr) {
//   return arr[0];
// }

// 2
// var array = ["A", 2, 3, 4, 5];
//
// function lastElementOf(arr) {
//   var newArr = [];
//
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//
//   return newArr[0];
// }

// 3
// var array = [1, 2, 3, 4, 5];
//
// function nthElementOf(arr, num) {
//   return arr[num];
// }

// 5
// My solution
// var array = [1, 2, 3, 4, 5];
//
// function firstNOf(arr, count) {
//   var newArr = [];
//
//   for (var i = 0; i < count; i++) {
//     newArr.push(arr[i]);
//   }
//
//   return newArr;
// }

// LS solution
// var digits = [4, 8, 15, 16, 23, 42];
//
// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }

// 6
// var array = [1, 2, 3, 4, 5, 6];
//
// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// }

// 7
// var array = [1, 2, 3, 4, 5, 6];
//
// function lastNOf(arr, count) {
//   var index = arr.length - count;
//
//   if (index < 0) {
//     index = 0;
//   }
//
//   return arr.slice(index);
// }

// 8
var array1 = [1, 2, 3, 4];
var array2 = ["A", "B", "C", "D"];

function endsOf(arr1, arr2) {
  return [arr1[0], arr2[arr2.length - 1]];
}
