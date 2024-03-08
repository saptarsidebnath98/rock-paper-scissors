//function to get Computer Choice
let list1 = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let rand = parseInt(Math.random() * 3);
  return list1[rand];
}

//global variables for game() & other purpose
let result = "";
let compScr = 0;
let plyrScr = 0;

//to display winner
const p = document.querySelector("#winner");
p.textContent = "- - -";

//display of live results
const rsltDiv = document.querySelector("#rslt");
rsltDiv.textContent = `COMPUTER:   Vs PLAYER:   `;

//game() function
function game(computerSelection, playerSelection) {
  // console.log("Computer selection: ", computerSelection); // computer selects rock or paper or scissors
  // console.log("Player selection: ", playerSelection); // player choice

  if (computerSelection === playerSelection) {
    result = "It's a tie!!";
    console.log(result);
  } else {
    if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        result = "Computer win!";
        console.log(result);
      } else if (computerSelection == "scissors") {
        result = "Player win!";
        console.log(result);
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        result = "Computer win!";
        console.log(result);
      } else if (computerSelection == "rock") {
        result = "Player win!";
        console.log(result);
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        result = "Computer win!";
        console.log(result);
      } else if (computerSelection == "paper") {
        result = "Player win!";
        console.log(result);
      }
    }
  }

  //logic for calculating scores
  if (result === "Computer win!") {
    compScr += 1;
  } else if (result === "Player win!") {
    plyrScr += 1;
  } else if (result === "It's a tie!!") {
    compScr += 0;
    plyrScr += 0;
  }

  //realtime score display
  rsltDiv.textContent = `COMPUTER: ${compScr} Vs PLAYER: ${plyrScr}`;

  //Play game for 5 rounds logic & set both values to zero
  if(compScr == 5){
    p.textContent = "COMPUTER WINS!";
    compScr = 0;
    plyrScr = 0;
  }
  else if(plyrScr == 5){
    p.textContent = "PLAYER WINS!";
    compScr = 0;
    plyrScr = 0;
  }

  //When both scores are zero don't show winner
  if(rsltDiv.textContent === `COMPUTER: 0 Vs PLAYER: 0`){
    p.textContent = "- - -";
  }
}

//button creation and addEventListner
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  game(getComputerChoice(), "rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  game(getComputerChoice(), "paper");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  game(getComputerChoice(), "scissors");
});

const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", () => {
    compScr = 0;
    plyrScr = 0;
    console.log(compScr, plyrScr);
    rsltDiv.textContent = `COMPUTER: ${compScr} Vs PLAYER: ${plyrScr}`;
    p.textContent = "- - -";

  });

