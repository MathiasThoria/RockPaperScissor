const SCISSOR = '&#9986';
const ROCK = '&#9968';
const PAPER = '&#128195';
//this function takes playerSelection and computerSelection strings
//and returns a string with the result of the match
function playRound(playerSelection, computerSelection) {
    
    console.log("La computadora eligio: " + computerSelection);
    console.log("Tu elegiste: " + playerSelection);
    

    switch (playerSelection){
        case "scissor":
            if (computerSelection == "paper") {
                return "win";
            } else if (computerSelection == "rock"){
                return "lose";
            } else {
                return "tie";
            }
        break;
        case "paper":
            if (computerSelection == "scissor") {
                return "lose";
            } else if (computerSelection == "rock"){
                return "win";
            } else {
                return "tie";
            }
        break;
        case "rock":
            if (computerSelection == "rock") {
                return "lose";
            } else if (computerSelection== "scissor"){
                return "win";
            } else {
                return "tie";
            }
        break;
        default:
            return "no entro en ninguno";
        break;
    }
}
//this function returns a random string between s,r and p
function getComputerChoice(){
    let rand = Math.random();
    let choice = "";
    const textPcSelection = document.querySelector(".pcSelection");
        
    console.log(rand);   
    if (rand < 0.3) {
        choice = "scissor";
        textPcSelection.innerHTML=''+ SCISSOR; /*stranger things happend with emojis*/
    } else if (rand < 0.6) {
        choice = "rock";
        textPcSelection.innerHTML=''+ ROCK;
    } else {
        choice = "paper";
        textPcSelection.innerHTML=''+ PAPER;
    };
    
    return choice;
}

function changerScoreboard(winOrNot){
    console.log(winOrNot);
    let yourResult = document.querySelector(".yourResult");
    let PcResult = document.querySelector(".pcResult");    
    let roundResult = document.querySelector(".result");
    if (winOrNot == "win")
        yourResult.textContent=+yourResult.textContent+1;
    else if (winOrNot=="lose")
        PcResult.textContent=+PcResult.textContent+1;
    roundResult.textContent= winOrNot;

}

function reset(){
    let yourResult = document.querySelector(".yourResult");
    let PcResult = document.querySelector(".pcResult");    
    let roundResult = document.querySelector(".result");
    let pcSelection = document.querySelector(".pcSelection");
    yourResult.textContent=0;
    PcResult.textContent=0;
    roundResult.textContent="...";
    pcSelection.textContent=".";
}

function game(){
    
    /*let cont = 0;
    let playerSelectionString = "";
    let whowin = "";*/
    let oneRoundResult = "";
    let pcPoints = 0;
    let youPoints = 0;
    let computerChoice = "";

    const buttons = document.querySelectorAll('.conteinerContentA>button');
    //console.log(buttons);
    const textResultPc = document.querySelector('.pcResult');
    const textResultYou = document.querySelector('.yourResult');


    buttons.forEach(button => {
        button.addEventListener('click',(e) =>{
            console.log(button.textContent);
            //alert(playRound(button.className,getComputerChoice()));
            
            computerChoice = getComputerChoice();      
            oneRoundResult = playRound(button.className, computerChoice);
            changerScoreboard(oneRoundResult);

            if (textResultPc.textContent == 5){
                alert("You loooose. Sorry.");
                reset();
            } 
            if (textResultYou.textContent == 5){
                alert("You win. Great!");
                reset();
            }
            
        });
    }


    );
    

  /*
    for (let i=0; i<5; i++){
        
        playerSelectionString = prompt("Scissors, Paper or Rock?");
      
        whowin = playRound(playerSelectionString.toLocaleLowerCase(),getComputerChoice());
        console.log(whowin);

        if (whowin.includes("win")) {            
            cont++;
        } else if(whowin.includes("lose")){
            cont--;
        } else{ 
            i--;
        }
    }
    if (cont<3){
        console.log("Loooooooooser");        
    }else{
        console.log("Ok, you win");
    }
    */
}


game();