// ***Exercise 1***
var apples, bananas;

apples = 3;
bananas = 5;

// if (apples == bananas) {
//   console.log("FALSE!");
// }


// ***Exercise 2***
bananas = "3";

// if (apples == bananas) {
//   console.log("ALMOST.");
// }


// ***Exercise 3***
// if (apples === bananas) {
//   console.log("Whoops :/");
// }


// ***Exercise 4***
// if (apples === bananas) {
//   console.log("FALSE!");
// } else {
//   console.log("Nope.");
// }


// ***Exercise 5***
// if (apples === bananas) {
//   console.log("Strict.");
// } else if (apples == bananas) {
//   console.log("Loose.");
// } else {
//   console.log("FALSE!");
// }


// ***Exercise 6***
// if (apples === bananas) {
//   console.log("Strict.");
// } else {
//   if (apples == bananas) {
//     console.log("Loose.");
//   } else {
//     console.log("FALSE!");
//   }
// }


// ***Exercise 7***
apples, bananas = 3;
var areEqual = apples === bananas;

// console.log(areEqual);


// ***Exercise 8***
bananas = undefined;
var eitherOr = apples || bananas;

// console.log(eitherOr);


// ***Exercise 9***
bananas = 1;

// console.log(eitherOr);

eitherOr = bananas || apples;

// console.log(eitherOr);


// ***Exercise 10***
var lastName, familyMessage;

lastName = "Meyer";

lastName === "Meyer" ? console.log(familyMessage = "You're part of the family!") : console.log(familyMessage = "You're not family.");