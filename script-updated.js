let computerScore = 0;
let playerScore = 0;
let hand = null;
let computerChoice = null;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const imgNode = document.querySelectorAll(".imgNode");
const btnQuery = document.querySelectorAll(".throw");
btnQuery.forEach(element => element.addEventListener("click", handSet));
function handSet(){
    imgNode.forEach(element => element.classList.remove("show"));
    if(this === rockBtn){
        hand=0;
        document.getElementById("playerRock").classList.add("show");
    }
    if(this === paperBtn){
        hand=1;
        document.getElementById("playerPaper").classList.add("show");
    }
    if(this === scissorsBtn){
        hand=2;
        document.getElementById("playerScissors").classList.add("show");
    }
    console.log(hand);
    
    let computerChoice = Math.floor(Math.random()*btnQuery.length);
    if(computerChoice == 0){
        document.getElementById("computerRock").classList.add("show");
    }
    if(computerChoice == 1){
        document.getElementById("computerPaper").classList.add("show");
    }
    if(computerChoice == 2){
        document.getElementById("computerScissors").classList.add("show");
    }
    console.log(computerChoice);
    checkScore(hand, computerChoice);
}
function checkScore(hand, computerChoice){
    if(hand>computerChoice && !(hand == 2 && computerChoice == 0)){
        playerScore++}
    else if((hand == 0)&&(computerChoice == 2)){
        playerScore++
    }
    else if(hand == computerChoice){
        return;
    }
    else{
        computerScore++
    }
    document.getElementById("scoreTxt").textContent = playerScore + "   ---  " + computerScore;
    if(playerScore == 5){
        alert("you win!");
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5){
        alert("you lose!");
        playerScore = 0;
        computerScore = 0;
    }
}

