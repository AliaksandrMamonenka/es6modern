// Game val
let min = 1,
  max = 10,
  winningNum = getWinNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.getElementById('guess-btn'),
  guessInput = document.getElementById('guess-input'),
  message = document.querySelector('.message');

//Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  //   console.log(guess);

  // Validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Von case
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct!) Congrats ^^`, 'green');
  } else {
    guessesLeft -= 1;
    if (!guessesLeft) {
      // Game over
      gameOver(
        false,
        `Game over, U lost. The correct ansewer is ${winningNum}`,
        'red'
      );
    } else {
      guessInput.value = '';
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left `,
        'blue'
      );
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg, color) {
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getWinNum(min, max) {
  let magicNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(magicNumber);
  return magicNumber;
}
