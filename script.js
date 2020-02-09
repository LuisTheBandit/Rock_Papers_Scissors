

function game() {
 const winnerScore = 5;
 let playerScore = 0;
 let computerScore = 0;
 
 for(let i = 0; i < winnerScore; i++) {
 	//ask for player's selection
  let playerSelection = prompt("Enter Rock, Paper, Scissors!").toLowerCase();
   // generate computer answer
  function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
   let computerSelection = computerPlay();

   let round = playRound(playerSelection, computerSelection);
       if(round === "wins") {
       	playerScore++;
         console.log("Computer chose: " + computerSelection + " You win!");
          
        }else if(round === "lost"){
        	computerScore++  ;
          console.log("Computer chose: " + computerSelection + " You lose")	
           
        }else if(round === "tied") {
           console.log("Computer chose: " + computerSelection + " You tied. Try again!")
        }
   }
 

       
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





