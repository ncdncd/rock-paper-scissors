let humanScore = 0;
let computerScore = 0;

let round = 0;

let draw = false;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else if (computerChoice == 2) {
    return "scissors";
  } else {
    return "computer error";
  }
}

function getHumanChoice() {
  let humanInput;

  do {
    humanInput = prompt("enter rock, paper, or scissors");
  } while (
    !(
      humanInput.localeCompare("rock") == 0 ||
      humanInput.localeCompare("paper") == 0 ||
      humanInput.localeCompare("scissors") == 0
    )
  );

  return humanInput;
}

function playRound(huma, comp) {

  if (comp.localeCompare(huma) == 0) {
    console.log(`draw! both uses ${comp}`);
    draw = true;
  } else if (
    (huma.localeCompare("rock") == 0 && comp.localeCompare("scissors") == 0) ||
    (huma.localeCompare("paper") == 0 && comp.localeCompare("rock") == 0) ||
    (huma.localeCompare("scissors") == 0 && comp.localeCompare("paper") == 0)
  ) {
    console.log(`you win! ${huma} beats ${comp}`);
    humanScore++
  } else {
    console.log(`you lose! ${comp} beats ${huma}`);
    computerScore++
  }
}

function playGame(n){
    for(let i = 0; i < n; i++){
        playRound(getHumanChoice(), getComputerChoice())
        if(draw == true){
            i--
            draw = false;
        }
        round++;
        console.log(`round: ${round}`)
    }
let winner;

if(humanScore > computerScore){
    winner = "You"
}else{
    winner = "Computer"
}

console.log(`${winner} Win! human:${humanScore} computer:${computerScore} total round:${round}`)

}

playGame(5)

//not case insensitive yet for rock paper scissors input