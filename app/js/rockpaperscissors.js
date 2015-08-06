////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal
    return move || getInput(); //=> returns 'rock' because that's what the player typed
    
}
  
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal 

    return move || randomPlay();
    
    }
     //=> 'paper'
function getWinner(playerMove,computerMove) {
    var winner; //This means winner is nothing nobody has won yet.

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    

    if((playerMove === "rock" && computerMove ==="scissors") || 
    (playerMove === "paper" && computerMove === "rock") || 
    (playerMove === "scissors" && computerMove === "paper")) {
        winner = 'player';
    }

    if
    ((computerMove === "rock" && playerMove === "scissors") ||
    (computerMove === "paper" && playerMove === "rock") ||
    (computerMove === "scissors" && playerMove === "paper")) {
        winner = 'computer';
    }

    if(computerMove === playerMove){
        winner = 'tie';
    }
    
    return winner;
}

console.log(getWinner('rock', 'paper'));
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    /*Write code that plays 'Rock, Paper, Scissors' until either the player or the 
    computer has won five times.*/

    while ((playerWins < 5) && (computerWins < 5)) {
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
         
        if(getWinner(playerMove, computerMove) === 'player') {
            playerWins += 1;
        } else if (getWinner(playerMove, computerMove) === 'computer') {
            computerWins +=1;
        }
        
        console.log ('Player chose ' + playerMove + ' while Computer chose ' + computerMove
         + 'The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
    }
    
    if (playerWins === 5 || computerWins === 5) {
        
        if (playerWins > computerWins) { 
            console.log('You win!');
        }
        
        else {
            console.log('I win!');
        }
        
        return [playerWins, computerWins];
    }
    
}
playToFive();