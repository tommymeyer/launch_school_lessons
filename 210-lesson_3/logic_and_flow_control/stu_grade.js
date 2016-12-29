// My first attempt
//
// var gradeOne = Number(prompt('What is your first score?'));
// var gradeTwo = Number(prompt('What is your second score?'));
// var gradeThree = Number(prompt('What is your third score?'));
//
// var avgGrade;
// var grade;
//
// function score() {
//   avgGrade = (gradeOne + gradeTwo + gradeThree) / 3;
//
//   if (avgGrade >= 90) {
//     grade = 'A';
//   } else if (avgGrade >= 70 && avgGrade < 90) {
//     grade = 'B';
//   } else if (avgGrade >= 50 && avgGrade < 70) {
//     grade = 'C';
//   } else {
//     grade = 'F';
//   }
//
//   alert(grade);
// }

// The exercise solution.
var gradeOne = Number(prompt('What is your first score?'));
var gradeTwo = Number(prompt('What is your second score?'));
var gradeThree = Number(prompt('What is your third score?'));

var total = gradeOne + gradeTwo + gradeThree;
var avgGrade = total / 3;

var grade;

if (avgGrade >= 90) {
  grade = 'A';
} else if (avgGrade >= 70 && avgGrade < 90) {
  grade = 'B';
} else if (avgGrade >= 50 && avgGrade < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

alert('You\'re average score is "' + grade + '".');
