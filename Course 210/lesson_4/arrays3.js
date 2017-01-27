// 1
// var count = [1, 1, 2, 2, 3, 3];
//
// function indexOf(arr, val) {
//   var not = -1;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//
//   return not;
// }

// 2
var count = [1, 1, 2, 2, 3, 3];

function lastIndexOf(arr, val) {
  var not = -1;

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return not;
}
