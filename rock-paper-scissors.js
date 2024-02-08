let playerCount = 0;
let computerCount = 0;
let i = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock" && computerSelection === "paper") {
        computerCount += 1;
        return "You lose! Paper beats rock!";
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        computerCount += 1;
        return "You lose! Scissors beats paper!";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        computerCount += 1;
        return "You lose! Rock beats scissors!";
    } else if (playerChoice === computerSelection) {
        return "Tie!";
    } else {
        playerCount += 1;
        return "You win!";
    }

}

function reset() {
    computerCount = 0;
    playerCount = 0;
    i = 0;
}

function playGame() {

    i++;

    if (i === 5) {
        if (computerCount > playerCount) {
            reset();
            return "Computer wins the 5 rounds!";
        } else if (playerCount > computerCount) {
            reset();
            return "Player wins the 5 rounds!";
        } else {
            return "It's a tie!";
        }
    }

}
