
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissors"]   
    let randomized = Math.floor(Math.random() * values.length)
    let response = values[randomized]
    return response;
}

function getPlayerChoice() {
 return prompt("Rock, Paper, or Scissors?")
}

const computerSelection = getComputerChoice();
const humanScore = 0;
const computerScore = 0;

function totalHumanScore() {
    return humanScore + 1
}

function totalComputerScore() {
    return computerScore + 1
}

function playRound(playerSelection, computerSelection) {
    let input = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    
    let computerRoundScore = totalComputerScore()
    let humanRoundScore = totalHumanScore()
    
    if (input === computerSelection) {
    alert("It's a tie!")
    return "The scores have not changed.";
   } else if (input === "Rock" && computerSelection === "Paper") {
    alert("You Lose! Paper beats Rock.")
    computerRoundScore += 1;
    return "The human has scored " + humanRoundScore + ". The computer has scored " + computerRoundScore + ".";
   } else if (input === "Paper" && computerSelection === "Scissors") {
    alert("You Lose! Scissors beat Paper.")
    computerRoundScore += 1;
    return "The human has scored " + humanRoundScore + ". The computer has scored " + computerRoundScore + ".";
   } else if (input === "Scissors" && computerSelection === "Rock") {
    alert("You Lose! Rock beats Scissors.")
    computerRoundScore += 1;
    return "The human has scored " + humanRoundScore + ". The computer has scored " + computerRoundScore + ".";
   } else {
    alert("You win!")
    humanRoundScore += 1
    return "The human has scored " + humanRoundScore + ". The computer has scored " + computerRoundScore + ".";
   }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let newPlayerSelection = getPlayerChoice()
        let newComputerSelection = getComputerChoice();
        console.log(playRound(newPlayerSelection, newComputerSelection))
}
}

console.log(game())