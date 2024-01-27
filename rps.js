let list1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let rand = parseInt(Math.random() * 3);
  return list1[rand];
}

function game(computerSelection, playerSelection) {

  computerSelection = getComputerChoice();
  playerSelection = prompt("Rock/ Paper/ Scissors:").toLowerCase();

  console.log("Computer selection: ", computerSelection); // computer selects rock or paper or scissors
  console.log("Player selection: ", playerSelection); // player choice

    if(computerSelection === playerSelection){
        console.log("It's a tie!!")
    }
    else{
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                console.log("Computer win!");
            }
            else if(computerSelection == "scissors"){
                console.log("Player win!");
            }
        }
        else if(playerSelection == "paper"){
            if(computerSelection == "scissors"){
                console.log("Computer win!");
            }
            else if(computerSelection == "rock"){
                console.log("Player win!");
            }
        }
        else if(playerSelection == "scissors"){
            if(computerSelection == "rock"){
                console.log("Computer win!");
            }
            else if(computerSelection == "paper"){
                console.log("Player win!");
            }
        }
        else{
            console.log("INVALID INPUT! game starting again.");
            game();
        }
    }
}

game();
