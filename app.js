// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const  game = document.getElementById('game'),
      minNum = document.getElementById('min-num'),
      maxNum = document.getElementById('max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.getElementById('message');

// Assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// Assign Event Listener for guess
guessBtn.addEventListener('click', function(){
  // Parse string to integer for validation
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
});

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}