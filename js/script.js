function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerResult = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerResult);
  return computerResult;
  // return computerResult; //Uncomment to run check section
}

const playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"').toLowerCase();
game();
// const computerChoice = computerPlay(); generated every time when playing multiple rounds
// playRound(playerChoice, computerChoice); will be invoked from game() for multiple rounds

function playRound(playerSelection, computerSelection) {
  const gameContent = `${playerSelection}${computerSelection}`;
  const optionSet = new Set(["rockscissors", "paperrock", "scissorspaper"]);
  if (playerSelection === computerSelection) {
    alert(`Tie! You both chose ${playerSelection}...`);
    return 1;
  } else if (optionSet.has(gameContent)) {
    alert(`You win! ${playerSelection} beats ${computerSelection}!`);
    return 2;
  } else {
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return 0;
  }
}

function game() {
  let points = 0;
  for (let i = 0; i < 5; i++) {
    let playerResult = playRound(playerChoice, computerPlay()); //playerChoice will be the same for the whole round, computerplay will be generated every round
    points = points + playerResult;
  }
  alert(`You scored ${points / 2} points, computer scored ${(10 - points) / 2}!`)
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