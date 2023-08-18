
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"]   
    let randomized = Math.floor(Math.random() * values.length)
    let response = values[randomized]
    return response;
}

const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let input = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    let humanScore = 0;
    let computerScore = 0;

    if (input === computerSelection) {
    alert("It's a tie!")
    return "The human has scored " + humanScore + ". The computer has scored " + computerScore + ".";
   } else if (input === "Rock" && computerSelection === "Paper") {
    alert("You Lose! Paper beats Rock.")
    return "The human has scored " + humanScore + ". The computer has scored " + computerScore + 1 + ".";
   } else if (input === "Paper" && computerSelection === "Scissors") {
    alert("You Lose! Scissors beat Paper.")
    return "The human has scored " + humanScore + ". The computer has scored " + computerScore + 1 + ".";
   } else if (input === "Scissors" && computerSelection === "Rock") {
    alert("You Lose! Rock beats Scissors.")
    return "The human has scored " + humanScore + ". The computer has scored " + computerScore + 1 + ".";
   } else {
    alert("You win!")
    return "The human has scored " + humanScore + 1 + ". The computer has scored " + computerScore + ".";
   }
}



function game() {
    console.log(playRound(playerSelection, computerSelection))
}


console.log(game())




   /* console.log()
    if(computerScore > playerScore) {
        return "The machine wins!"
    } else if(computerScore < playerScore) {
        return "The human prevails!"
    } else {
        return "Mortal and machine are tied."
    } */



    
