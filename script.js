/////////MANIPULATE DOM BY CREATING NEW ELEMENTS AND ADDING TEXT WITHIN THE FUNCTIONS///////////////////////


const myScore = document.querySelector("#playerScore");
const theirScore = document.querySelector("#computerScore");
const gameWinner = document.querySelector("#gameWinner");
const outcome = document.querySelector("#outcome");
const computerSelect = document.querySelector("#computerSelect");

const gameText = document.querySelector(".gameText");
const p = document.createElement('p');

const winner = document.querySelector(".winner");
const winnerH1 = document.createElement('h1');



///////////FUNCTIONS TO PLAY GAME//////////////////////

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num === 0) {
        computerSelect.textContent = "Computer chose: ROCK";
        return 'ROCK';
    } else if (num === 1){
        computerSelect.textContent = "Computer chose: PAPER";
        return 'PAPER';
    } else if (num === 2){
        computerSelect.textContent = "Computer chose: SCISSORS";
        return 'SCISSORS';
    } else {
        console.log('Something went wrong in getComputerChoice');
    }
}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) { 
        outcome.textContent = "player threw " + playerSelection + " and computer threw " + computerSelection + ". It's a tie!";


    } else if (playerSelection === 'ROCK') { 
        if (computerSelection === 'SCISSORS') {
            playerScore += 1;
            
            myScore.textContent = "Player Score: " + playerScore;
            outcome.textContent = "You win! ROCK beats SCISSORS"
            game();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! PAPER beats ROCK";
            game();
        }
    } else if (playerSelection === 'PAPER') { 
        if (computerSelection === 'ROCK') {
            playerScore += 1;

            myScore.textContent = "Player Score: " + playerScore;
            outcome.textContent = "You win! PAPER beats ROCK";
            game();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! SCISSORS beats PAPER";
            game();
        }
    } else if (playerSelection === 'SCISSORS') { 
        if (computerSelection === 'PAPER') {
            playerScore += 1;

            myScore.textContent = "Player Score: " + playerScore;
            outcome.textContent = "You win! SCISSORS beats PAPER";
            game();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! ROCK beats SCISSORS";
            game();
        }
    }
}

function game() {
    scoreP.textContent = "Your score: " + playerScore + "\t\tComputer score: " + computerScore;
    score.appendChild(scoreP);
    
    
    if (playerScore >= 5) {
        gameWinner.textContent = "Congratulations! You win!";


        winner.appendChild(winnerH1);
        score.removeChild(scoreP);
        gameText.removeChild(p);

        setTimeout(newGame, 5000);
    } else if (computerScore >= 5) {
        gameWinner.textContent = "YOU LOSE, TRY AGAIN!";


        winner.appendChild(winnerH1);
        score.removeChild(scoreP);
        gameText.removeChild(p);

        setTimeout(newGame, 5000);
    };
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    winner.removeChild(winnerH1);
}

let playerScore = 0;
let computerScore = 0;



/////////////////////ADDING EVENT HANDLERS TO BUTTONS//////////////////////////
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {playRound('ROCK', getComputerChoice())});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {playRound('PAPER', getComputerChoice())});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {playRound('SCISSORS', getComputerChoice())});




