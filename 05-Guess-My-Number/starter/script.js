'use strict';

const msg = document.querySelector('.message');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoring = 20;
let hScore = 0;

const checkEngine = () => {
  if (guess.value == '') {
    msg.textContent = 'No number!';
  } else if (guess.value == secretNumber) {
    msg.textContent = 'You hit the number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    numberDisplay.textContent = secretNumber;
    if (scoring > hScore) {
      hScore = scoring;
      highScore.textContent = hScore;
    }

    // } else if (guess.value > secretNumber) {
    //   msg.textContent = 'Too high!';
    //   scoring--;
    //   score.textContent = scoring;
    //   if (scoring == 0) {
    //     msg.textContent = 'Try Again!';
    //     btnCheck.disabled = true;
    //     btnCheck.style.backgroundColor = 'red';
    //   }
    // } else if (guess.value < secretNumber) {
    //   msg.textContent = 'Too low!';
    //   scoring--;
    //   score.textContent = scoring;
    //   if (scoring == 0) {
    //     msg.textContent = 'Try Again!';
    //     btnCheck.disabled = true;
    //     btnCheck.style.backgroundColor = 'red';
    //   }
  } else if (guess.value !== secretNumber) {
    if (scoring >= 1) {
      msg.textContent = guess.value > secretNumber ? 'Too high!' : 'Too low';
      scoring--;
      score.textContent = scoring;
    }
    if (scoring == 0) {
      msg.textContent = 'Try Again!';
      btnCheck.disabled = true;
      btnCheck.style.backgroundColor = 'red';
    }
  }
};

const resetAll = () => {
  scoring = 20;
  score.textContent = '20';
  msg.textContent = 'Start guessing...';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  numberDisplay.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  btnCheck.style.backgroundColor = '#eee';
  btnCheck.disabled = false;
};

btnCheck.addEventListener('click', checkEngine);
btnAgain.addEventListener('click', resetAll);
