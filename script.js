///////////FUNCTIONS TO PLAY GAME//////////////////////

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
     
        const div = document.createElement('div');
        div.innerHTML = "player threw " + playerSelection + " and computer threw " + computerSelection + ". It's a tie!";
        document.body.appendChild(div);

    } else if (playerSelection === 'ROCK') { 
        if (computerSelection === 'SCISSORS') {
            playerScore += 1;
        
            const div = document.createElement('div');
            div.innerHTML = "You win! ROCK beats SCISSORS";
            document.body.appendChild(div);
        } else {
            computerScore += 1;

            const div = document.createElement('div');
            div.innerHTML = "You lose! PAPER beats ROCK";
            document.body.appendChild(div);
        }
    } else if (playerSelection === 'PAPER') { 
        if (computerSelection === 'ROCK') {
            playerScore += 1;

            const div = document.createElement('div');
            div.innerHTML = "You win! PAPER beats ROCK";
            document.body.appendChild(div);
        } else {
            computerScore += 1;
  
            const div = document.createElement('div');
            div.innerHTML = "You lose! SCISSORS beats PAPER";
            document.body.appendChild(div);
        }
    } else if (playerSelection === 'SCISSORS') { 
        if (computerSelection === 'PAPER') {
            playerScore += 1;
        
            const div = document.createElement('div');
            div.innerHTML = "You win! SCISSORS beats PAPER";
            document.body.appendChild(div);
        } else {
            computerScore += 1;
            
            const div = document.createElement('div');
            div.innerHTML = "You lose! ROCK beats SCISSORS";
            document.body.appendChild(div);
        }
    }
}

function game() {
   
   
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



/////////////////////ADDING EVENT HANDLERS TO BUTTONS//////////////////////////
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function() {playRound('ROCK', getComputerChoice())});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function() {playRound('PAPER', getComputerChoice())});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function() {playRound('SCISSORS', getComputerChoice())});


