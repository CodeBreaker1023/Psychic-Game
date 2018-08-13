var theNumber = Math.floor(Math.random()*10+1);

function checkGuess()
{
    var guess = document.getElementById('guess');
    var output = document.getElementById('output');
    var guessesLeft = document.getElementById('guessesLeft');
    var myNumber = guess.value;
    alert(theNumber);
    
    if (myNumber < theNumber)
    {
        output.value = "Too low. Try again.";
        guessesLeft--;
    }
    else if (myNumber > theNumber)
    {
        output.value = "Too high. Try again.";
    }
    else if (myNumber == theNumber)
    {
        output.value = "Wow! I just got chills! You got it!"
    }
}

var $newGameButton = document.getElementById('new-game-button');
$newGameButton.addEventListener('click', newGame);

function newGame () {
    // reset all game info
    gameRunning = true;
    guessesRemaining = 8;
    guessedLetters = [];
    incorrectLetterBank = [];


    // pick a new letter
    // computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerChoiceArr.push(computerChoice);
    computerChoice = theNumber = Math.floor(Math.random()*10+1);
    computerChoiceArr.push(computerChoice);


    // write all new game info to DOM
    $guessesRemaining.textContent = guessesRemaining;
    $guessedLetters.textContent = incorrectLetterBank;
};

