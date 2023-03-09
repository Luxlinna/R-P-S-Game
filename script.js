// random computer choice
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'papper';
        case 2:
            return 'scissors';
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    // Loop 5 times player
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please type : rock , papper or scissors?');
        alert("You threw  :  " + playerSelection);
        const computerSelection = computerPlay();
        alert("computer threw  :  " + computerSelection);
        const result = playRound(playerSelection, computerSelection);
        alert("The result is  :  " + result);
        if (result.startsWith('You win!')) {
            playerScore++;
        } else if (result.startsWith('You lose!')) {
            computerScore++;
        }
    }
    // Display final score and the winner !
    alert("Your score is  :  " + playerScore + " And Computer score is  :  " + computerScore);

    if (playerScore > computerScore) {
        alert("Player won ! ");
    } else if (playerScore === computerScore) {
        alert("Player and Computer are tie ");
    } else {
        alert("Computer won ! ");
    }
}
playGame();