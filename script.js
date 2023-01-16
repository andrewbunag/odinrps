
    function getComputerChoice() {
        let x = Math.floor(Math.random()* 3 + 1)
        let choice = " "

        if(x == 1) {
            choice = "Rock"
        }
        
        else if (x == 2) {
        choice = "Scissors"
        }

        else if(x ==3) {
            choice = "Paper"
        }
        
        return choice;


    }
    function game () {
        let playerW = 0;
        let compW = 0;
        let gameWin = " ";
    
    }

    function playRound(playerSelection, computerSelection) {
    this.computerSelection = getComputerChoice();
    this.playerSelection = prompt("Rock, Paper, Scissors?")
    let player = this.playerSelection.toLowerCase();
    let str = " "

    if (this.computerSelection == "Rock" && player == "paper") {
        str = "You win! Paper beats Rock!";
    }
   
    else if (this.computerSelection == "Rock" && player == "scissors") {
        str ="You lose! Rock Beats Scissors!";
    }

    else if (this.computerSelection == "Paper" && player == "rock") {
       str =  "You lose! Paper beats Rock!";
     }
    
    else if (this.computerSelection == "Paper" && player == "scissors") {
        str = "You win! Scissors beats Paper!";
    }
    else if (this.computerSelection == "Scissors" && player == "rock") {
        str ="You win! Rock beats Scissors!";
    }

    else if (this.computerSelection == "Scissors" && player == "paper") {
        str ="You lose! Scissors beats Paper!";
    }
    else {
        str ="You and your opponent selected the same choice! It's a draw!";
    }

    return str;



}


    game();








   
    
