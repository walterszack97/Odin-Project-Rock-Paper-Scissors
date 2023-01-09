function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num === 0) {
        return 'ROCK'
    } else if (num === 1){
        return 'PAPER'
    } else if (num === 2){
        return 'SCISSORS'
    } else {
        console.log('Something went wrong in getComputerChoice');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("player threw " + playerSelection + " and computer threw " + computerSelection + ". It's a tie!");
    } else if (playerSelection === 'ROCK') { 
        if (computerSelection === 'SCISSORS') {
            playerScore += 1;
            return("You win! ROCK beats SCISSORS");
        } else {
            computerScore += 1;
            return("You lose! PAPER beats ROCK");
        }
    } else if (playerSelection === 'PAPER') { 
        if (computerSelection === 'ROCK') {
            playerScore += 1;
            return("You win! PAPER beats ROCK");
        } else {
            computerScore += 1;
            return("You lose! SCISSORS beats PAPER");
        }
    } else if (playerSelection === 'SCISSORS') { 
        if (computerSelection === 'PAPER') {
            playerScore += 1;
            return("You win! SCISSORS beats PAPER");
        } else {
            computerScore += 1;
            return("You lose! ROCK beats SCISSORS");
        }
    }
}

function game() {
   
    let playerSelection = prompt("Enter Rock, Paper or Scissors: ").toUpperCase();

    while (playerSelection != 'ROCK' && playerSelection != 'SCISSORS' && playerSelection != 'PAPER'){
        playerSelection = prompt("You must enter Rock, Paper or Scissors: ").toLocaleUpperCase();
    }
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (playerScore < computerScore) {
        console.log("YOU LOSE, TRY AGAIN!");
    } else {
        console.log("WOW! It's a tie!");
    }
}




let playerScore = 0;
let computerScore = 0;
game();