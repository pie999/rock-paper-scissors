function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "scissors")
            return "You win! Rock beats Scissors";
        else if (computerSelection == "paper")
            return "You lose! Paper beats Rock";
        else return "Tie! Both players chose Rock"
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock")
            return "You win! paper beats rock";
        else if (computerSelection == "scissors")
            return "You lose! scissor beats paper";
        else return "Tie! Both players chose paper"
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "paper")
            return "You win! scissor beats paper";
        else if (computerSelection == "rock")
            return "You lose! rock beats scissors";
        else return "Tie! Both players chose scissors"
    }
}

const playerSelection = "SCISSORS";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection.toUpperCase().toLowerCase(), computerSelection));
