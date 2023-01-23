//Generates number between 0-2 to represent the 3 options of RPS.

let playerScore = 0;
let computerScore = 0;
let scored = true;

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


    //checks for tie and invalid choices
    if(playerChoice == computerChoice){
        scored = false;
        return `You both picked ${playerChoice}! Draw!`;
    }else if(playerChoice != 'rock' && playerChoice && playerChoice != 'paper' && playerChoice != 'scissors'){
        scored = false;
        return 'You can only choose "rock", "paper", or "scissors"!';
    }
    //compares different scenarios
    switch(playerChoice){
        case 'rock':
            if(computerChoice == 'paper'){
                scored = true;
                computerScore += 1;
                return 'You lose! Paper beats Rock!';
            }else{
                scored = true;
                playerScore += 1;
                return 'You win! Rock beats Scissors!';
            }
            break;
        case 'paper':
            if(computerChoice == 'scissors'){
                scored = true;
                computerScore += 1;
                return 'You lose! Scissors beats Paper!';
            }else{
                scored = true;
                playerScore += 1;
                return 'You win! Paper beats Rock!';
            }
            break;
        case 'scissors':
            if(computerChoice == 'rock'){
                scored = true;
                computerScore += 1;
                return 'You lose! Rock beats Scissors!';
            }else{
                scored = true;
                playerScore += 1;
                return 'You win! Scissors beats Paper!';
            }
            break;
    }


}

function game(){
    for (let i = 0; i < 5; i++) {
        if(scored == false){
            i--;
            const yourChoice = prompt("Choose Rock Paper or Scissors!").toLowerCase();
            const computerChoice = getComputerChoice();

            console.log('Your choice: ', yourChoice);  
            console.log('The computers choice: ', computerChoice);
            console.log(playRound(yourChoice, computerChoice));

            console.log('Your score: ', playerScore);
            console.log('Computers score: ', computerScore);
        }else{
            const yourChoice = prompt("Choose Rock Paper or Scissors!").toLowerCase();
            const computerChoice = getComputerChoice();

            console.log('Your choice: ', yourChoice);  
            console.log('The computers choice: ', computerChoice);
            console.log(playRound(yourChoice, computerChoice));

            console.log('Your score: ', playerScore);
            console.log('Computers score: ', computerScore);
        }

    }
}

game();
