'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = params => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const rollDice = params => {
  if (playing) {
    const rollNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${rollNumber}.png`;
    dice.classList.remove('hidden');
    if (rollNumber !== 1) {
      currentScore += rollNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdFunction = params => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

const newGame = params => {
  playing = true;
  dice.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  activePlayer = 0;
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdFunction);
btnNew.addEventListener('click', newGame);
