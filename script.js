
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
    console.log(rand);
    if (rand < 0.3) {
        return "scissors";
    } else if (rand < 0.6) {
        return "rock";
    } else {
        return "paper";
    }
}

function game(){
    let cont = 0;
    let playerSelectionString = "";
    let whowin = "";
    //round of 5 games
    for (let i=0; i<5; i++){
        //variable needed to lower case later
        playerSelectionString = prompt("Scissors, Paper or Rock?");
        //varieble to use .includes method
        whowin = playRound(playerSelectionString.toLocaleLowerCase(),getComputerChoice());
        console.log(whowin);

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
        console.log("Ok, you win");
    }
}

game();