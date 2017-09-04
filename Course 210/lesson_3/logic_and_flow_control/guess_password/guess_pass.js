var password = 'password';
var failure = 0;

while (true) {
  var guess = prompt('PASSVORD!');

  if (guess === password) {
    alert('Is that the red or the white?');
    break;
  }

  failure++;

  if (failure === 3) {
    alert('Intruder alert!')
    break;
  }
}
