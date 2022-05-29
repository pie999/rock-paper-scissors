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

function resetGame (){
    playerScore = 0;
    computerScore = 0;
    score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    while(container.firstChild) 
        container.removeChild(container.firstChild);
    buttons.forEach((button) => button.addEventListener("click", playGame));
}

function checkWin(){
    if (playerScore == 5 || computerScore == 5){
        const ann = document.createElement("p");
        ann.classList.add("bold")
        if (playerScore == 5) ann.textContent = "YOU WON THE SET!";
        else ann.textContent = "YOU LOST THE SET!";
        container.appendChild(ann);
        buttons.forEach((button) => button.removeEventListener("click", playGame));
        
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.classList.add("pybutton");
        playAgainButton.addEventListener("click", resetGame);
        container.appendChild(playAgainButton);
    }
}

function playGame(e) {
    const ann = document.createElement("p");
    ann.textContent = playRound(e.target.id, computerPlay());
    container.appendChild(ann);
    score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    checkWin();
}



const container = document.querySelector(".container");
const score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", playGame));


