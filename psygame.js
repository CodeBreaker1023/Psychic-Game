$(document).ready(function() {

// Alphabet array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declare initial variables needed to start game: guesses, choices, win/loss counter
var guesses;
var computerChoice;
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var alertArray = ["The Force is strong with this one. Nice win!", "How'd you do that? Did you peak at the answer?", "Congratulations! You won!", "Nice one! Mind guessing the lottery numbers while you're at it?"];

// Create newGame function to reset all stats, pick new word and create blanks
function newGame () {
    // reset all game info
    gameRunning = true;
    guessesRemaining = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];

    // pick a new letter
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    // write all new game info to DOM
    $guessesRemaining.textContent = guessesRemaining;
    $guessedLetters.textContent = incorrectLetterBank;
}

// Use onkeyup to register user's keystroke
document.onkeyup = function (event) {
    var userGuess = event.key;

// Create function to compare userGuess to computerChoice
function checkGuess() {
    // If win, add win to counter and run restartGame function
    if (userGuess === computerChoice) {
    wins++;
    alert()
    restartGame();
     // If player runs out of guesses, add loss to counter and rerun restartGame function
    } else if (guessesLeft < 0) {
        losses++;
        alert("Sorry! Your ESP ability must be lacking. Hit restart and try again.")
        restartGame()
    // Incorrect guess, but since guessesLeft > 0, subtract one
    } else {
        guessesLeft--;
}

// Use onkeyup to register user's keystroke
document.onkeyup = function (event) {
    var userGuess = event.key;

// Chain user onkeyup selection with "Your guess: " string
document.getElementById('onKey').innerHTML = userGuess;

// Compare userGuess to computerChoice to determine win/loss
// If win, add win to counter and run restartGame function
if (userGuess === computerChoice) {
    wins++;
    alert()
    restartGame();
// If player runs out of guesses, add loss to counter and rerun restartGame function
} else if (guessesLeft < 0) {
    losses++;
    alert("Sorry! Your ESP ability must be lacking. Hit restart and try again.")
    restartGame()
// Add an incorrect guess and record it underneath Incorrect Guesses
} else {
    guessesLeft--;
    document.getElementById('onKey').innerHTML = userGuess;
}

// Initiate random alert after win
function winAlert () {
    if (userGuess === computerChoice) {
        // for (i = 0; i < alertArray.length; i++)
        var chosenAlert = alertArray[Math.floor(Math.random() * alertArray.length)];
        alert(chosenAlert);
    }
}
}