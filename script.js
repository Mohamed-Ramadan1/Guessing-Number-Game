'use strict';
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const mainMessage = document.querySelector('.message');

const secretNumber = Math.round(Math.random() * 20);
const number = document.querySelector('.number');

let score = 20;
const scoreValue = document.querySelector('.score');

function lostGame(score) {
  if (score === 0) {
    mainMessage.textContent = '💥 You lost the game!';
  }
}

function giveMessage(message) {
  mainMessage.textContent = message;
}

function updateScoreValue(score) {
  scoreValue.textContent = score;
}

checkButton.addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    giveMessage('⛔️No selected number yet.');
  } else if (guessedNumber === secretNumber) {
    giveMessage('🎉 Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    number.style.width = '30rem';
  } else if (guessedNumber > secretNumber) {
    giveMessage('📈Too Height Number');
    if (score > 0) {
      lostGame(score);
      score--;
    }
    updateScoreValue(score);
  } else if (guessedNumber < secretNumber) {
    giveMessage('📉Too Low Number');
    if (score > 0) {
      lostGame(score);
      score--;
    }
    updateScoreValue(score);
  }
});

function resetGame() {
  number.textContent = '?';
  score = 20;
  number.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  giveMessage('Start guessing...');
}

againButton.addEventListener('click', function () {
  document.querySelector('.highscore').textContent = score;
  resetGame();
});
