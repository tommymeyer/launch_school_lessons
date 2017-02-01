// 1
// var original = [1, 2, 3, 4, 5, 6, 7];
//
// function slice(arr, start, end) {
//   var newArr = [];
//
//   for (var i = start; i < end; i++) {
//     push(newArr, arr[i]);
//   }
//
//   return newArr;
// }
//
// function push(arr, val) {
//   arr[arr.length] = val;
//   return arr.length;
// }

// 2
// var original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function splice(arr, start, num) {
//   var newArr = [];
//
//   for (var i = start; i < arr.length; i++) {
//     if (i < start + num) {
//       push(newArr, arr[i]);
//     }
//
//     arr[i] = arr[i + num];
//   }
//
//   arr.length = arr.length - num;
//   return newArr;
// }
//
// function push(arr, val) {
//   arr[arr.length] = val;
//   return arr.length;
// }

// 3
// var original1 = [1, 2, 3], original2 = [4, 5, 6];
//
// function concat(arr1, arr2) {
//   var newArr = [];
//
//   for (var i = 0; i < arr1.length; i++) {
//     push(newArr, arr1[i]);
//   }
//
//   for (var j = 0; j < arr2.length; j++) {
//     push(newArr, arr2[j]);
//   }
//
//   return newArr;
// }
//
// function push(arr, val) {
//   arr[arr.length] = val;
//   return arr.length;
// }

// 4
var origArr = [1, 2, 1, 2];
var str = ' and ';

function join(arr, sep) {
  var newStr = '';

  sep = sep || 'c';

  for (var i = 0; i < arr.length; i++) {
    newStr += String(arr[i]);

    if (i < arr.length - 1) {
      newStr += sep;
    }
  }

  return newStr;
}
