'use strict';

// Math.random -> return 0 ~ 1
// 0 ~ 20 -> Math.random * 20
// delete -> Math.trunc()
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

// addEventListener
// first Element -> name of the event
// Second Element -> EventHandler
// EventHandler is function. just a function expression
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😢 No Number!';

    // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Number!';
    // CSS를 DOM을 이용해 조작할 때는 반드시 'string type' 으로 조작 해야 한다.
    // 또한 css의 두 단어 이상의 property를 정의할 때는 반드시 camelCase로 작성해야 한다.
    // 왜냐하면 JS에서 -가 뺄셈연산자로 인식하기 때문 background-color -> backgroundColor
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) { 
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😜 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤔 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😜 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
