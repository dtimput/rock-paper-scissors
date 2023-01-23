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
