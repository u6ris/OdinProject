function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    let computerChoice = CHOICES[choice] 
    console.log(`I chose ${computerChoice}`);
    return computerChoice;
}

/*function getHumanChoice(){
    let isValid = false;
    let humanChoice = "";
    while (!isValid){
        isValid = true;
        humanChoice = prompt("rock, paper or scissors ?");
        if (humanChoice.toLowerCase() === "rock"){
            humanChoice = "rock"
        } else if (humanChoice.toLowerCase() === "paper"){
            humanChoice = "paper"
        } else if (humanChoice.toLowerCase() === "scissors"){
            humanChoice = "scissors"
        } else {
            console.log("This entry is not valid. Please choose again.")
            isValid = false;
        }
    }
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}*/

let humanScore = 0;
let computerScore = 0;

const div = document.querySelector(".result");

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice){
        div.innerHTML = "It's a draw!";
    }
    else if ((humanChoice === "rock" && computerChoice ==="scissors") || (humanChoice === "scissors" && computerChoice ==="paper") || (humanChoice === "paper" && computerChoice ==="rock")){
        humanScore++
        div.innerHTML = `I lose! ${humanChoice} beats ${computerChoice} `;
    }
    else if ((computerChoice === "scissors" && humanChoice ==="paper") || (computerChoice === "paper" && humanChoice ==="rock") || (computerChoice === "rock" && humanChoice ==="scissors")){
        computerScore++
        div.innerHTML = `You lose! ${computerChoice} beats ${humanChoice} `;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        if(humanScore == 5 || computerScore == 5){
            announceWinner();
        }
        else { 
            playRound(button.id); 
        }
    })
})

function announceWinner(){
    if (humanScore == 5){
        div.innerHTML = "Congrats! You are the winner!"
    } else {
        div.innerHTML = "Game over! Better luck next time!";
    }
}

/*function playGame(){
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
}*/

