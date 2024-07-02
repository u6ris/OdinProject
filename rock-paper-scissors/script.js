function getComputerChoice() {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*3);
    let computerChoice = CHOICES[choice] 
    console.log(`I chose ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice(){
    let isValid = false;
    let humanChoice = "";
    while (!isValid){
        isValid = true;
        humanChoice = prompt("Rock, Paper or Scissors ?");
        if (humanChoice.toLowerCase() === "rock"){
            humanChoice = "Rock"
        } else if (humanChoice.toLowerCase() === "paper"){
            humanChoice = "Paper"
        } else if (humanChoice.toLowerCase() === "scissors"){
            humanChoice = "Scissors"
        } else {
            console.log("This entry is not valid. Please choose again.")
            isValid = false;
        }
    }
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a draw!")
    }
    else if ((humanChoice === "Rock" && computerChoice ==="Scissors") || (humanChoice === "Scissors" && computerChoice ==="Paper") || (humanChoice === "Paper" && computerChoice ==="Rock")){
        humanScore++
        console.log(`I lose! ${humanChoice} beats ${computerChoice} `)
    }
    else if ((computerChoice === "Scissors" && humanChoice ==="Paper") || (computerChoice === "Paper" && humanChoice ==="Rock") || (computerChoice === "Rock" && humanChoice ==="Scissors")){
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `)
    }
}

function playGame(){
    let counter = 1;
    let humanSelection = "";
    let computerSelection = "";
    humanScore = 0;
    computerScore = 0;
    console.log("A full game consists of 5 rounds. Good luck!")
    while (counter<=5){
        console.log(`Round ${counter}`)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        counter++;
    }
    if(humanScore > computerScore){
        console.log(`You won ${humanScore} round out of 5! You are the winner!`)
    } else {
        console.log("Game over! Better luck next time!")
    }
}

playGame();