// 1
// var count = [1, 2, 3];
//
// function push(arr, val) {
//   arr[arr.length] = val;
//   return arr.length;
// }

// 2
// var count = [1, 2, 3, 4];
//
// function pop(arr) {
//   var newLength = arr.length - 1;
//   var val = arr[newLength];
//   arr.length = newLength;
//   return val;
// }

// 3
// var count = [1, 2, 3];
//
// function unshift(arr, val) {
//   for (var i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//
//   arr[0] = val;
//   return arr.length;
// }

// 4
var count = [1, 2, 3, 4]

function shift(arr) {
  var remove = arr[0];

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return remove;
}
