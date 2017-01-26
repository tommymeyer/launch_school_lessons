// 1
// var count = [1, 2, 3];
//
// function push(arr, v) {
//   arr[arr.length] = v;
//   return arr;
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
var count = [1, 2, 3];

function unshift(arr, v) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = v;
  return arr.length;
}
