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
        p.innerHTML = "player threw " + playerSelection + " and computer threw " + computerSelection + ". It's a tie!";
        gameText.appendChild(p);


    } else if (playerSelection === 'ROCK') { 
        if (computerSelection === 'SCISSORS') {
            playerScore += 1;
                     
            p.innerHTML = "You win! ROCK beats SCISSORS";
            gameText.appendChild(p);
            game();
        } else {
            computerScore += 1;

            p.innerHTML = "You lose! PAPER beats ROCK";
            gameText.appendChild(p);
            game();
        }
    } else if (playerSelection === 'PAPER') { 
        if (computerSelection === 'ROCK') {
            playerScore += 1;

            p.innerHTML = "You win! PAPER beats ROCK";
            gameText.appendChild(p);
            game();
        } else {
            computerScore += 1;

            p.innerHTML = "You lose! SCISSORS beats PAPER";
            gameText.appendChild(p);
            game();
        }
    } else if (playerSelection === 'SCISSORS') { 
        if (computerSelection === 'PAPER') {
            playerScore += 1;

            p.innerHTML = "You win! SCISSORS beats PAPER";
            gameText.appendChild(p);
            game();
        } else {
            computerScore += 1;

            p.innerHTML = "You lose! ROCK beats SCISSORS";
            gameText.appendChild(p);
            game();
        }
    }
}

function game() {
    scoreP.textContent = "Your score: " + playerScore + "\t\tComputer score: " + computerScore;
    score.appendChild(scoreP);
    
    
    if (playerScore >= 5) {
        winnerH1.textContent = "Congratulations! You win!";
        winner.appendChild(winnerH1);
        score.removeChild(scoreP);
        gameText.removeChild(p);

        setTimeout(newGame, 5000);
    } else if (computerScore >= 5) {
        winnerH1.textContent = "YOU LOSE, TRY AGAIN!";
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
rockBtn.addEventListener('click', function() {playRound('ROCK', getComputerChoice())});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function() {playRound('PAPER', getComputerChoice())});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function() {playRound('SCISSORS', getComputerChoice())});



/////////MANIPULATE DOM BY CREATING NEW ELEMENTS AND ADDING TEXT WITHIN THE FUNCTIONS///////////////////////
const score = document.querySelector(".score");
const scoreP = document.createElement("p");

const gameText = document.querySelector(".gameText");
const p = document.createElement('p');

const winner = document.querySelector(".winner");
const winnerH1 = document.createElement('h1');

