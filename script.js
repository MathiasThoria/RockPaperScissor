const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


//this function takes playerSelection and computerSelection strings
//and returns a string with the result of the match
function playRound(playerSelection, computerSelection) {
    switch (playerSelection){
        case "scissors":
            if (computerSelection == "paper") {
                return "You win! Scissor beats Paper";
            } else if (computerSelection== "rock"){
                return "You lose! Rock beats Scissors";
            } else {
                return "Tie! Try again ";
            }
        break;
        case "paper":
            if (computerSelection == "scissors") {
                return "You lose! Scissor beats Paper";
            } else if (computerSelection == "rock"){
                return "You win! Paper beats Rock";
            } else {
                return "Tie! Try again ";
            }
        break;
        case "rock":
            if (computerSelection == "paper") {
                return "You lose! Paper beats Rock";
            } else if (computerSelection== "scissor"){
                return "You win! Rock beats Scissors";
            } else {
                return "Tie! Try again ";
            }
        break;
    }
}
//this function returns a random string between s,r and p
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

function game(){
    let cont = 0;
    let whowin = "";
    for (let i=0; i<5; i++){
        whowin = playRound(prompt("Scissors, Paper or Rock?"),computerSelection());
        if (whowin.includes("win")) {
            cont++;
        } else if(whowin.includes("lose")){
            cont--;
        } else{ /* if tie, repeat */
            i--;
        }
    }
    if (cont<3){
        console.log("Loooooooooser");        
    }else{
        console.log("Ok, you win")
    }
}
