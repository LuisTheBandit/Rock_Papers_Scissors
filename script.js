

ffunction game() {
 const winnerScore = 5;
 let playerScore = 0;
 let computerScore = 0;
 let div = document.querySelector("div");
 let button = document.querySelectorAll("button");
 let p = document.createElement("p")






   for(let i = 0; i < button.length; i++) {

    button[i].addEventListener("click",function (e){
     let playerSelection = e.target.value ;          
   // generate computer answer
  function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
   let computerSelection = computerPlay();

   let round = playRound(playerSelection, computerSelection);
       if(round === "wins") {
        playerScore++;
         p.textContent = `You win, computer chose : ${ computerSelection }`
         div.appendChild(p)
          
        }else if(round === "lost"){
          computerScore++  ;
           p.textContent = `You lose, computer chose : ${ computerSelection }`;
          div.appendChild(p)
           
        }else if(round === "tied") {
            p.textContent = `You tied, computer chose : ${ computerSelection }`;
          div.appendChild(p)
        }
  })
 
};
       
    if(playerScore > computerScore ) {
      console.log("You won the game!")
    }else{
      console.log("you lost the game to the computer")

    }
}    

///end of game function


function playRound(playerSelection, computerSelection){
   if(playerSelection === "rock" && computerSelection === "Scissors") {
     return "wins";
    }
     else if(computerSelection === "paper") {
       return "lost"  
     }
       else{
       return "tied";
       }
 


if(playerSelection === "paper" && computerSelection === "rock") {
     return "wins";
    }
     else if(computerSelection === "Scissors") {
       return "lost"  
     }
       else{
       return "tied";
       }



   if(playerSelection === "Scissors" && computerScore === "paper") {
     return "wins";
    }
     else if(computerScore === "rock") {
       return "lost";
     }
       else{
       return "tied";
       }
 
   }


window.addEventListener('DOMContentLoaded', game);