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
    else if (playerSelection == "paper"){
        if (computerSelection == "rock")
            return "You win! paper beats rock";
        else if (computerSelection == "scissors")
            return "You lose! scissor beats paper";
        else return "Tie! Both players chose paper"
    }
    else if(playerSelection == "scissors"){
        if (computerSelection == "paper")
            return "You win! scissor beats paper";
        else if (computerSelection == "rock")
            return "You lose! rock beats scissors";
        else return "Tie! Both players chose scissors"
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose").toUpperCase().toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            playerSelection = prompt("Try again").toUpperCase().toLowerCase();
        }
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result.slice(0,5) == "You w") playerPoints++;
        else if (result.slice(0,5) == "You l") computerPoints++;
        alert(result + "\nPlayer: " + playerPoints + "   Computer: " + computerPoints);
    }
    if (playerPoints > computerPoints) alert("YOU WON THE SET");
    else if (playerPoints < computerPoints) alert("YOU LOST THE SET");
    else alert("YOU TIED THE SET");
}

game();
