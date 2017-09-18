var password = "password";
var failedAttempts = 0;

while (true) {
  var guess = prompt("What is the password?");

  if (guess === password) {
    alert("You have successfully logged in.");
    break;
  }

  failedAttempts++;

  if (failedAttempts === 3) {
    alert("You have been denied access.");
    break;
  }
}