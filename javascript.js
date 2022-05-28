function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return `Tie! Both players chose ${playerSelection}`
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computerScore++;
        return `You lose! ${playerSelection} is beaten by ${computerSelection}`;
    }
}

const container = document.querySelector(".container");
const score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const ann = document.createElement("p");
        ann.textContent = playRound(button.id, computerPlay());
        container.appendChild(ann);
        score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
    });   
});

