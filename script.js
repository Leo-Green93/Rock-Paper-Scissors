let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0'
    document.querySelector('.computerScore').textContent = 'Score: 0'
    document.querySelector('.ties').textContent = 'Ties: 0'
    document.querySelector('.winner').textContent = ''
    document.querySelector('.playerChoice').textContent = ''
    document.querySelector('.computerChoice').textContent = ''
    document.querySelector('.reset').style.display = "none";
}

function startGame() {

    //play the game until someone wins 5 times
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
    img.addEventListener(('click'), () =>{
        if(img.id){
            playRound(img.id);
        }
    })
    );
}


function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5){
        return
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);

    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner); 
    wins = checkWins();
    if(wins == 5) {
        //display end results
        //change the button to visible
        //change the text to display winner
        displayEnd()
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5){
        document.querySelector('.winner').textContent = "You Won 5 Games, Congratulations!"
    } else {
        document.querySelector('.winner').textContent = "Sorry, the computer won 5 times"
    }
    document.querySelector('.reset').computedStyleMap.display = 'flex'
}


function displayRound(playerChoice, computerChoice, winner){
    document.querySelector('.playerChoice').textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    document.querySelector(
        ".computerChoice"
        ).textContent = `The Computer Chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner){
    if(winner == 'Player'){
        document.querySelector(".winner").textContent = "You won the round!"
    } else if(winner == 'Computer'){
        document.querySelector(".winner").textContent = "The Computer won the Round";
    } else {
        document.querySelector(".winner").textContent = `The Round was a tie`;
    }
}

function tallyWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`
    document.querySelector('.ties').textContent = `Score: ${ties}`


}

function computerSelect() {
    //todo - update the dom with the computer selection
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount)
}

function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "Player";
    } else if (choice1 == choice2) {
        return "Tie";
    } else {
        return "Computer";
    }
}

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}
startGame()

/* OLD CODE
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
        let newPlayerSelection = getPlayerChoice()
        let newComputerSelection = getComputerChoice();
        playRound(newPlayerSelection, newComputerSelection)
        
}
    alert("The final scores are Comp: " + computerScore + " Player: " + humanScore)


game()
*/
