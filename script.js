
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"]   
    let randomized = Math.floor(Math.random() * values.length)
    let response = values[randomized]
    return response
}


function playRound(playerSelection, computerSelection) {
    let input = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();

    if (input === computerSelection) {
    return "It's a tie!"
   } else if (input === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock.";
   } else if (input === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beat Paper.";
   } else if (input === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors."
   } else {
    return "You win!"
   }
}

const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));