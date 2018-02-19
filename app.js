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
  } else {

    // Check the Guess
    if(guess === winningNum){
      // Game Over - Won
      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.style.borderColor = 'green';
      // Set message
      setMessage(`${winningNum} is correct, You WIN!`, 'green');
    } else{
      // Wrong number
      guessesLeft -= 1;
      if(guessesLeft === 0){
        // Game Over - Lost
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'red';
        // Set message
        setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
      } else{
        // Game Continues - Wrong Answer
        // Set message
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
      }
    }

  }

});

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}