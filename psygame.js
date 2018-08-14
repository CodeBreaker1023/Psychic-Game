// Grab reference to DOM elements
var $newGameButton = document.getElementById('new-game-button');
// var $guessButton = document.getElementById('guess');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// Add event listener for new game button
$newGameButton.addEventListener('click', newGame);
// $guessButton.addEventListener('click', checkGuess);
$guessesLeft.addEventListener('click', guessesLeft);
$wins.addEventListener('click', wins);
$losses.addEventListener('click', losses);

// Alphabet array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declare initial variables needed to start game: guesses, choices, win/loss counter
var guess;
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
var incorrectLetterBank = [];
var guessesLeft = 8;
var gameRunning = false;
var wins = 0;
var losses = 0;
var computerChoiceArr = [];
var alertArray = ["The Force is strong with this one. Nice win!", "How'd you do that? Did you peak at the answer?", "Congratulations! You won!", "Nice one! Mind guessing the lottery numbers while you're at it?"];
var incorrectArray = ["Nope. Think harder and try again.", "Incorrect. Choose another letter.", "Well you've eliminated 3 numbers. Try again.", "I'm starting to doubt your ESP ability.", "Nope. How many guesses do you need?", "3 guesses left.", "Still no. You can do this! Try again.", "Duh duh dun! Last try!"];
var checkGuess = document.getElementById('guess');
var i = 0;

// Create newGame function to reset all stats, pick new word and create blanks
function newGame () {
    // reset all game info
    gameRunning = true;
    guessesLeft = 8;
    // guessedLetters = [];
    incorrectLetterBank = [];
    
    // pick a new letter
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerChoiceArr.push(computerChoice);

    // write all new game info to DOM
    $('#guessesLeft').text(guessesLeft);
    // $('#guessedLetters').text(guessedLetters);
    $('#incorrectLetterBank').text(incorrectLetterBank);

    // Clear input fields for new game
    $('#guess').val('');
    $('#output').val('');
};

// Clear input fields 
$('#guess').on("click", function() {
    $('#guess').val('');
    $('#output').val('');
});

// Add functionality to start button
$('#new-game-button').on("click", function() {
    newGame();
});

// Create function to compare userGuess to computerChoice
$('#checkGuess').on("click", function() {
    // Set variables
    // var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    var guess = document.getElementById('guess');
    var output = document.getElementById('output');
    var guessValue = guess.value;   
    console.log(guessValue);
    console.log(computerChoice);
    
    // If win, add win to counter and run restartGame function
    if (guessValue === computerChoice) {   
        wins++;
        gameRunning = false;
        $('#wins').text(wins);
        winAlert();   
     // Incorrect guess, but since guessesLeft > 1, subtract one from total
    } else if (guess !== computerChoice && guessesLeft > 0) {
        output.value = incorrectArray[i];
        i++;
        incorrectLetterBank.push(guessValue);  
        incorrectLetterBank.toString();
        document.getElementById("incorrectLetterBank").innerHTML = incorrectLetterBank;
        guessesLeft--;
        $('#guessesLeft').text(guessesLeft);
        $('#checkGuess').val(''); 
    // If player runs out of guesses, add loss to counter and print alert
    } else {
        losses++;
        gameRunning = false;
        // alert("Sorry! Your ESP ability must be lacking. I was thinking of " + computerChoice ". Hit restart and try again.");
        $('#losses').text(losses);
        alert("Sorry! You ran out of guesses. Hit the start button to try again.");
    } 
});

// Initiate random alert after win
function winAlert () {
    // if (userGuess === computerChoice) {
    // for (i = 0; i < alertArray.length; i++)
    var chosenAlert = alertArray[Math.floor(Math.random() * alertArray.length)];
    alert(chosenAlert);
    }; 

//     }
// };

