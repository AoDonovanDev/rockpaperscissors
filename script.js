let playerscore = 0
let computerscore = 0
game()
function game(){ for(i = 0; i < 5; i++){
let player1 = evalPlayerChoice()
let computerplayer = getComputerChoice()
numeratePlayerChoice()
result()
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    choiceval = Math.floor(Math.random()*choices.length);
    return choiceval;
}
function evalPlayerChoice(){
let playerChoice = prompt("let's play a game! first to 5 wins! pick rock, paper, or scissors");
return eval = playerChoice.toLowerCase(); 
}
function numeratePlayerChoice(){
    if(player1 === "rock"){
        hand = 0
    }
    else if(player1 === "paper"){
        hand = 1
    }
    else if(player1 === "scissors"){
        hand = 2
    }
    else{alert("i didn't understand that, try again")}
}
function result(){
    let wordify = ["rock", "paper", "scissors"]
    if(((hand > computerplayer) || ((hand == 0)&&(computerplayer == 2)))){
        alert(wordify[hand]+" beats "+wordify[computerplayer]+" you win");
        playerscore++
    }
    else if(hand === computerplayer){alert("you both played "+wordify[hand]+" it is a tie")}
    else{alert(wordify[hand]+" loses to "+wordify[computerplayer]+" try again");
    computerscore++
    }
    alert("the score is "+playerscore+" to "+computerscore);
    if(i == 4){
        alert("the game is over")
        if(playerscore>computerscore){alert("you win!")}
        else{alert("you lose!")}
    }   
}
}
}