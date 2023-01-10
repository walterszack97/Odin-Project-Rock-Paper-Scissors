/////////MANIPULATE DOM BY CREATING NEW ELEMENTS AND ADDING TEXT WITHIN THE FUNCTIONS///////////////////////


const myScore = document.querySelector("#playerScore");
const theirScore = document.querySelector("#computerScore");
const gameWinner = document.querySelector("#gameWinner");
const outcome = document.querySelector("#outcome");
const computerSelect = document.querySelector("#computerSelect");
const computerBubble = document.querySelector(".computer");
const buttonsBubble = document.querySelector(".buttons");

let playerScore = 0;
let computerScore = 0;

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

            growUserBubble();
            gameWin();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! PAPER beats ROCK";

            growComputerBubble();
            gameWin();
        }
    } else if (playerSelection === 'PAPER') { 
        if (computerSelection === 'ROCK') {
            playerScore += 1;

            myScore.textContent = "Player Score: " + playerScore;
            outcome.textContent = "You win! PAPER beats ROCK";
            growUserBubble();
            gameWin();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! SCISSORS beats PAPER";
            growComputerBubble();
            gameWin();
        }
    } else if (playerSelection === 'SCISSORS') { 
        if (computerSelection === 'PAPER') {
            playerScore += 1;

            myScore.textContent = "Player Score: " + playerScore;
            outcome.textContent = "You win! SCISSORS beats PAPER";
            growUserBubble();
            gameWin();
        } else {
            computerScore += 1;

            theirScore.textContent = "Computer Score: " + computerScore;
            outcome.textContent = "You lose! ROCK beats SCISSORS";
            growComputerBubble();
            gameWin();
        }
    }
}

function gameWin() {
    if (playerScore >= 5 || computerScore >= 5){
        if (playerScore >= 5) {
            outcome.textContent = "YOU WON!";
            newGame();
        } else if (computerScore >= 5) {
            outcome.textContent = "YOU LOSE, TRY AGAIN!"; 
            newGame();
        }
    }
}

function startGame() {
     //reset scores to 0
     playerScore = 0;
     computerScore = 0;
     
    //hide the html elements
    buttonsBubble.style.display = "flex";
    computerBubble.style.display = "flex";
    myScore.style.display = "block";
    theirScore.style.display = "block";

    //reset html element text
    myScore.textContent = "My Score: " + playerScore;
    theirScore.textContent = "Computer Score: " + computerScore;
    outcome.textContent = "GAME";
    computerSelect.textContent = "Computer chose: "

    //reset bubble size
    buttonsBubble.style.width = "150px";
    buttonsBubble.style.height = "150px";
    computerBubble.style.width = "150px";
    computerBubble.style.height = "150px";
}

function newGame() {
    //hide the html elements
    buttonsBubble.style.display = "none";
    computerBubble.style.display = "none";
}

function growUserBubble() {
    accessElement = getComputedStyle(buttonsBubble);
    accessAttributeWidth = parseInt(accessElement.width);
    accessAttributeHeight = parseInt(accessElement.height);
    buttonsBubble.style.width = (accessAttributeWidth + 80) + 'px';
    buttonsBubble.style.height = (accessAttributeHeight + 80) + 'px';
}

function growComputerBubble() {
    accessElementComp = getComputedStyle(computerBubble);
    accessAttributeWidthComp = parseInt(accessElementComp.width);
    accessAttributeHeightComp = parseInt(accessElementComp.height);
    computerBubble.style.width = (accessAttributeWidthComp + 80) + 'px';
    computerBubble.style.height = (accessAttributeHeightComp + 80) + 'px';
}


/////////////////////ADDING EVENT HANDLERS TO BUTTONS//////////////////////////
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {playRound('ROCK', getComputerChoice())});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {playRound('PAPER', getComputerChoice())});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {playRound('SCISSORS', getComputerChoice())});

const playButton = document.querySelector("#outcome");
playButton.addEventListener('click', () => {startGame()});




