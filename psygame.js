// Grab reference to DOM elements
var $newGameButton = document.getElementById('new-game-button');
var $guessButton = document.getElementById('guess');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// Add event listener for new game button
$newGameButton.addEventListener('click', newGame);
$guessButton.addEventListener('click', checkGuess);
$guessedLetters.addEventListener('click', guessedLetters);
$guessesLeft.addEventListener('click', guessesLeft);
$wins.addEventListener('click', wins);
$losses.addEventListener('click', losses);

// Alphabet array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declare initial variables needed to start game: guesses, choices, win/loss counter
var guess;
var guessedLetters = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessesLeft = 8;
var gameRunning = false;
var wins = 0;
var losses = 0;
var computerChoiceArr = [];
var alertArray = ["The Force is strong with this one. Nice win!", "How'd you do that? Did you peak at the answer?", "Congratulations! You won!", "Nice one! Mind guessing the lottery numbers while you're at it?"];

var checkGuess = document.getElementById('guess');
    if(checkGuess)
// Create newGame function to reset all stats, pick new word and create blanks
function newGame () {
    // reset all game info
    gameRunning = true;
    guessesRemaining = 8;
    guessedLetters = [];
    incorrectLetterBank = [];

    // pick a new letter
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerChoiceArr.push(computerChoice);

    // write all new game info to DOM
    $guessesRemaining.textContent = guessesRemaining;
    $guessedLetters.textContent = incorrectLetterBank;
};

// // Use onkeyup to register user's keystroke
// document.onkeyup = function (event) {
//     var userGuess = event.key;

// Create function to compare userGuess to computerChoice
function checkGuess() {
    // Set variables
    // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var guess = document.getElementById('guess');
    var output = document.getElementById('output');
    var guessValue = guess.value;   
    
    // If win, add win to counter and run restartGame function
    if (guess === computerChoice) 
    {   
        wins++;
        gameRunning = false;
        $wins.textContent = wins;
        winAlert();
        
    // If player runs out of guesses, add loss to counter and print alert
    } else if (guessesLeft === 0) 
    {
        losses++;
        gameRunning = false;
        // alert("Sorry! Your ESP ability must be lacking. I was thinking of " + computerChoice ". Hit restart and try again.");
        $losses.textContent = losses;
        

    // Incorrect guess, but since guessesLeft > 0, subtract one from total
    } else 
    {
        output.value = "Nope. Think harder and try again.";
        incorrectLetterBank.push("guess");  
        incorrectLetterBank.toString();
        document.getElementById("guessed-letters").innerHTML = incorrectLetterBank;
        guessesLeft--;
        $guessesLeft.textContent = guessesLeft;

    }
};

function guessedLetters () {
    if (guess !== computerChoice) {
        incorrectLetterBank.push("guess");  
        incorrectLetterBank.toString();
        document.getElementById("guessed-letters").innerHTML = incorrectLetterBank;
}

}
// // Use onkeyup to register user's keystroke
// document.onkeyup = function (event) {
//     var userGuess = event.key;

// // Chain user onkeyup selection with user guess to record in incorrectLetterBank
//     document.getElementById('onKey').innerHTML = userGuess;
// };
// Compare userGuess to computerChoice to determine win/loss
// If win, add win to counter and run restartGame function
    // if (userGuess === computerChoice) {
    //     wins++;
    //     alert()
    //     restartGame();
    // // If player runs out of guesses, add loss to counter and rerun restartGame function
    // } else if (guessesLeft < 0) {
    //     losses++;
    //     alert("Sorry! Your ESP ability must be lacking. Hit restart and try again.")
    //     restartGame()
    // // Add an incorrect guess and record it underneath Incorrect Guesses
    // } else {
    //     guessesLeft--;
    //     document.getElementById('onKey').innerHTML = userGuess;
    // };

// Initiate random alert after win
function winAlert () {
    // if (userGuess === computerChoice) {
    // for (i = 0; i < alertArray.length; i++)
    var chosenAlert = alertArray[Math.floor(Math.random() * alertArray.length)];
    alert(chosenAlert);
    } 

//     }
// };

