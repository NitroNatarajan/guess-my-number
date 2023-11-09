'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}
const displayScore = function (score){
    document.querySelector(".score").textContent = score;
}
document.querySelector(".check").addEventListener("click",function (){
   const guess =  Number(document.querySelector(".guess").value);
//    If no number entered;
   if(!guess){
    displayMessage("⛔ No Number");
   }
//    if the correct guess;
   else if(guess === secretNumber) {
    displayMessage("🎉 Correct Number..");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    // Updating the highscore
    if(score > highScore ){
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
    }
   }
   else if(guess !== secretNumber){
    if(score>1){
        displayMessage(guess > secretNumber? "📈 Too High": "📉 Too Low");
        score--;
        displayScore(score);
    }
    else{
        displayMessage("🧨 You lost the game");
        displayScore(0);
    } 
   }

})

// Game - play again functionality without page refresh

document.querySelector(".again").addEventListener("click" , function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage("Start Guessing...");
    displayScore(score);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})