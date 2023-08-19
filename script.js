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
let humanScore = 0;
let computerScore = 0;

function totalHumanScore() {
    humanScore++
}

function totalComputerScore() {
    computerScore++
}

function playRound(playerSelection, computerSelection) {
    let input = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    
    
    if (input === computerSelection) {
    alert("It's a tie! Comp: " + computerScore + "Player: " + humanScore)
   } 
   
   else if (input === "Rock" && computerSelection === "Paper") {
    totalComputerScore()
    alert("You Lose! Paper beats Rock. Comp: " + computerScore + " Player: " + humanScore)
   
   } else if (input === "Paper" && computerSelection === "Scissors") {
    totalComputerScore()
    alert("You Lose! Scissors beat Paper. Comp: " + computerScore + " Player: " + humanScore)
   
   } else if (input === "Scissors" && computerSelection === "Rock") {
    totalComputerScore()
    alert("You Lose! Rock beats Scissors. Comp: " + computerScore + " Player: " + humanScore)
    
   } else if (input === "Paper" && computerSelection === "Rock") {
    totalHumanScore()
    alert("You win! Paper beats Rock. Comp: " + computerScore + " Player: " + humanScore)

   } else if (input === "Scissors" && computerSelection === "Paper") {
    totalHumanScore()
    alert("You win! Scissors beat Paper. Comp: " + computerScore + " Player: " + humanScore) 

   } else if (input === "Rock" && computerSelection === "Scissors") {
    totalHumanScore()
    alert("You win! Rock beats Scissors. Comp: " + computerScore + " Player: " + humanScore) 
}
}

function game() {
    for(let i = 0; i < 5; i++) {
        let newPlayerSelection = getPlayerChoice()
        let newComputerSelection = getComputerChoice();
        playRound(newPlayerSelection, newComputerSelection)
        
}
    alert("The final scores are Comp: " + computerScore + " Player: " + humanScore)
}

game()

