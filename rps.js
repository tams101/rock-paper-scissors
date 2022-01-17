const array = ["rock", "paper", "scissors"];

function computerPlay(){
    return array[Math.floor(Math.random() * array.length)]
};

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper")
  {return "Player won!"}
    else if( computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper")
    {return "Computer won!"}
    else {return "It's a tie"}};

let playerSelection = "paper";
let computerSelection = computerPlay().toLowerCase();

console.log(playRound(playerSelection, computerSelection));