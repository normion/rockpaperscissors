/* JavaScript rock, paper, scissors
   Versión 0.1
   Author: Eduardo Nordmann
   Date: 17/07/2022
*/
//Constans
const elements = ["rock", "paper", "scissors"];

//Variables
let playerGame = 0;
let computerGame = 0;

//Make one move for the machine randomizing between 0 to 2
function computerPlay() {
    return Math.floor(Math.random() * 3); 
  }

//Make one move for the player
function playerPlay() {
    let badPlay; //Is it the answer icorrect?
    let playValue; //Result of the play
    let message="";

    do{
        badPlay= false;
        switch (prompt(message + "What's your selection?").toLowerCase()) {
            case "rock":
                playValue = 0;
                break;
        
            case "paper":
                playValue = 1;
                break;
            case "scissors":
                playValue = 2;
                break;
            default:
                //If nothing macht let's repeat
                badPlay= true;
                message="Selection incorrect. ";
                break;
    }
    }while(goodPlay);
    return playValue
}

//Play a round of the game. 0 is a tie, 1 computer wins, 2 player 
function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    } else if ((playerSelection ==0 && computerSelection==1)||(playerSelection ==1 && computerSelection==0)) {
        if (playerSelection ==0){
            return 1;
        }else return 2;
    } else if (playerSelection ==1 && computerSelection==2||(playerSelection ==2 && computerSelection==1)) {
        if (playerSelection ==1){
            return 1;
        }else return 2;
    } else if (playerSelection ==2 && computerSelection==0 ||(playerSelection ==0 && computerSelection==2)) {
        if (playerSelection ==1){
            return 1;
        }else return 2;
    }
    
}
//Makes 5 rounds and shows who wins
function game() {
    let computerScore=0;
    let playerScore=0;
    let playResult=0;
    let message= "Tie";//Sets tie by default to show 'tie' if nobody wins 
    for (let i = 0; i < 5; i++) {
        playResult=roundPlay(playerPlay(), computerPlay());
        if (playResult > 1) {
            computerScore++;
            message= "Computer wins";
        } else if (playResult > 0 ) {
            playerScore++;
            message= "Player wins";
        } 
        console.log(message);
        message= "Tie";
    }
    if (computerScore > playerScore) {
        console.log("You have been defeated!");
    } else if(computerScore< playerScore){
        console.log("You win!");
    }else console.log("It's a tie!");
}
  
  game();