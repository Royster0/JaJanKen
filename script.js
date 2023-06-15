let playerScore = 0;
let computerScore = 0;

let numRounds = Number(prompt("How many rounds would you like to play? "));

function formatPhrase(phrase) {
    phrase = phrase.trim();
    phrase = phrase.toLowerCase();
    let firstLetter = phrase.slice(0, 1);
    phrase = phrase.substring(1, phrase.length)
    return firstLetter.toUpperCase() + phrase;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
        return "Rock";
    } else if(choice == 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatPhrase(playerSelection);

    if (playerSelection == computerSelection) {
        return "Both players chose " + formatPhrase(playerSelection) + ". Tie!: "+playerScore+"-"+computerScore;
    }
    // Cases where player will win
    if (playerSelection == "Rock" && computerSelection == "Scissor" ||
        playerSelection == "Paper" && computerSelection == "Rock" || 
        playerSelection == "Scissor" && computerSelection == "Paper") {
            playerScore++;
            return "You Won! " + playerSelection + " beats " + computerSelection + ": " +playerScore+"-"+computerScore;
    }
    // Cases where computer will win
    if (computerSelection == "Rock" && playerSelection == "Scissor" ||
        computerSelection == "Paper" && playerSelection == "Rock" || 
        computerSelection == "Scissor" && playerSelection == "Paper") {
            computerScore++;
            return "You Lost! " + computerSelection + " beats " + playerSelection+": "+playerScore+"-"+computerScore;
    }
}

function game(numRounds) {
    for(i = 0; i < numRounds; i++) {
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        // if player has won majority of rounds
        if(playerScore == Math.ceil(numRounds/2)) {
            console.log("You've beat the computer! " + playerScore + "-" + computerScore);
            break;
        } else if(computerScore == Math.ceil(numRounds/2)) {
            console.log("You've lost to the computer! " + computerScore + "-" + playerScore);
            break;
        }
    }
    playerScore = 0;
    computerScore = 0;
}

console.log(game(numRounds));