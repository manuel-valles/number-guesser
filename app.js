// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

// Play again event listener
// Need to be 'mousedown' to display the Game Over message before
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Assign Event Listener for guess
guessBtn.addEventListener('click', function(){
  // Parse string to integer for validation
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {

    // Check the Guess
    if(guess === winningNum){
      // Game Over - Won
      gameOver(true, `${winningNum} is correct, You WIN!`)
    } else{
      // Wrong number
      guessesLeft -= 1;
      if(guessesLeft === 0){
        // Game Over - Lost
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
      } else{
        // Game Continues - Wrong Answer
        // Clear Input
        guessInput.value = '';
        // Message for another try
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
      }
    }

  }

});

// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Message for the end of the Game
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = 'Play Again';
  // Add class name 
  guessBtn.className = 'play-again';

}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// Get Random Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}