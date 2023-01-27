//Generates number between 0-2 to represent the 3 options of RPS.

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const options = document.querySelectorAll(".option");
options.forEach(option => option.addEventListener('click', selection));

function selection(e){
    const button = e.target;
    if(button.classList.contains("rock")){
        playerChoice = "rock";
        updateScoreBoard();
    }else if(button.classList.contains("paper")){
        playerChoice = "paper";
        updateScoreBoard();
    }else if(button.classList.contains("scissors")){
        playerChoice = "scissors";
        updateScoreBoard();        
    }
}

function updateScoreBoard(){
    //if(playerScore <= 5 && computerChoice <=5){
    document.querySelector(".playerSelection").textContent = `Player Selection: ${playerChoice}`;
    computerChoice = getComputerChoice();
    document.querySelector(".computerSelection").textContent = `Computer  Selection: ${computerChoice}`;
    let status = playRound(playerChoice, computerChoice);
    document.querySelector(".gameStatus").textContent = status;
    document.querySelector(".playerScore").textContent = `Player Score: ${playerScore}`;
    document.querySelector(".computerScore").textContent = `Computer Score: ${computerScore}`;
    //}
}   

function getComputerChoice(){
    let randomPick = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if(randomPick == 0){
        computerChoice = "rock";
        return computerChoice;
    }else if(randomPick == 1){
        computerChoice = "paper";
        return computerChoice;
    }else{
        computerChoice = "scissors";
        return computerChoice;
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return `You both picked ${playerChoice}! Draw!`;
    }
    //compares different scenarios
    switch(playerChoice){
        case 'rock':
            if(computerChoice == 'paper'){
                computerScore += 1;
                return 'You lose! Paper beats Rock!';
            }else{
                playerScore += 1;
                return 'You win! Rock beats Scissors!';
            }
            break;
        case 'paper':
            if(computerChoice == 'scissors'){
                computerScore += 1;
                return 'You lose! Scissors beats Paper!';
            }else{
                playerScore += 1;
                return 'You win! Paper beats Rock!';
            }
            break;
        case 'scissors':
            if(computerChoice == 'rock'){
                computerScore += 1;
                return 'You lose! Rock beats Scissors!';
            }else{
                playerScore += 1;
                return 'You win! Scissors beats Paper!';
            }
            break;
    }


}
