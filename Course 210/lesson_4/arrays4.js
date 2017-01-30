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
var original = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function splice(arr, start, num) {
  var newArr = [];

  for (var i = start; i < arr.length; i++) {
    if (i < start + num) {
      push(newArr, arr[i]);
    }

    arr[i] = arr[i + num];
  }

  arr.length = arr.length - num;
  return newArr;
}

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}
