//Generates number between 0-2 to represent the 3 options of RPS.
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
        return `You both picked ${playerChoice}! Draw!`;
    }else if(playerChoice != 'rock' && playerChoice && playerChoice != 'paper' && playerChoice != 'scissors'){
        return 'You can only choose "rock", "paper", or "scissors"!';
    }
    //compares different scenarios
    switch(playerChoice){
        case 'rock':
            if(computerChoice == 'paper'){
                return 'You lose! Paper beats Rock!';
            }else{
                return 'You win! Rock beats Scissors!';
            }
            break;
        case 'paper':
            if(computerChoice == 'scissors'){
                return 'You lose! Scissors beats Paper!';
            }else{
                return 'You win! Paper beats Rock!';
            }
            break;
        case 'scissors':
            if(computerChoice == 'rock'){
                return 'You lose! Rock beats Scissors!';
            }else{
                return 'You win! Scissors beats Paper!';
            }
            break;
    }


}

const yourChoice = prompt("Choose Rock Paper or Scissors!").toLowerCase();
const computerChoice = getComputerChoice();

console.log('Your choice: ', yourChoice);
console.log('The computers choice: ', computerChoice);
console.log(playRound(yourChoice, computerChoice));