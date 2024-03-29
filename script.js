'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
//parameter will be the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input!
  if (!guess) {
    displayMessage('no number!');
    // document.querySelector('.message').textContent = 'no number';
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'CorrectNumber';
    displayMessage('correctNumber');
    document.querySelector('.number').textContent = secretNumber;
    //-------------------------------------------------------------------------------------------------------------
    document.querySelector('body').style.backgroundColor = 'green';
    // score = score + 1;
    score++;
    // score += 1;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!' : 'Too Low!';
      // score = score - 1;
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      //   score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'you lost the game';
      //////////////////////////////////////////////////
      displayMessage('you lost the game!!!');
      document.querySelector('.score').textContent = 0;
    }
    //when guess is to high!
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too High!';
    //       // score = score - 1;
    //       score--;
    //       //   score -= 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'you lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //     //when guess is to low!
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too low!';
    //       // score = score - 1;
    //       score--;
    //       //   score -= 1;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'you lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //     // document.querySelector('.message').textContent = 'Too low!';
    //     // // score = score - 1;
    //     // // score --;
    //     // score -= 1;
    //     // document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.backgroundColor = '15rem';
});
