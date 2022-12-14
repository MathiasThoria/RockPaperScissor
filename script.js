
function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case "scissors":
            if computerSelection == "paper" {
                return "You win! Scissor beats Paper";
            } else if (computerSelection== "rock"){
                return "You lose! Rock beats Scissors";
            } else {
                return "Tie! Try again ";
            }
        break;
        case "paper":
            if computerSelection == "scissors" {
                return "You lose! Scissor beats Paper";
            } else if (computerSelection == "rock"){
                return "You win! Paper beats Rock";
            } else {
                return "Tie! Try again ";
            }
        break;
        case "rock":
            if computerSelection == "paper" {
                return "You lose! Paper beats Rock";
            } else if (computerSelection== "scissor"){
                return "You win! Rock beats Scissors";
            } else {
                return "Tie! Try again ";
            }
        break;
    }
}

function getComputerChoice(){
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.3) {
        return "Scissors";
    } else if (rand < 0.6) {
        return "Rock";
    } else {
        return "Paper";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
