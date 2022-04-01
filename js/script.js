function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerResult = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerResult);
  return computerResult;
  // return computerResult; //Uncomment to run check section
}

const playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"').toLowerCase();
const computerChoice = computerPlay();
playRound(playerChoice, computerChoice);

function playRound(playerSelection, computerSelection) {
  const gameContent = `${playerSelection}${computerSelection}`;
  const optionSet = new Set(["rockscissors","paperrock","scissorspaper"]);
  if (playerSelection === computerSelection) {
    alert(`Tie! You both chose ${playerSelection}...`);
  } else if (optionSet.has(gameContent)) {
    alert(`Computer chose ${computerSelection}. You win!`);
  } else {
    alert(`Computer chose ${computerSelection}. You lose!`);
  }
}


/*

//Check and print i repetitions of computerPlay

let rock = 0;
let paper = 0;
let scissors = 0;

for (let i = 0; i < 10000; i++) {
  let toCount = computerPlay();
  switch (toCount) {
    case 'rock':
      rock++;
      break
    case 'paper':
      paper++;
      break
    case 'scissors':
      scissors++;
      break
  }
}

console.log(rock, paper, scissors);*/