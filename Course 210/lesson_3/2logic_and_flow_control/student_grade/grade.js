var score1 = Number(prompt("First score: "));
var score2 = Number(prompt("Second score: "));
var score3 = Number(prompt("Third score: "));

var total = score1 + score2 + score3;
var avg = total / 3;

var grade;

if (avg >= 90) {
  grade = "A";
} else if (avg >= 70 && avg <= 90) {
  grade = "B";
} else if (avg >= 50 && avg <= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Your letter grade is: " + grade + ".");