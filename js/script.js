function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerResult = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerResult);
  return computerResult;
  // return computerResult; //Uncomment to run check section
}

function playerInput() {
  let choice = ''
  choice = prompt('Type "Rock", "Paper" or "Scissors" to start a game:').toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    console.log(choice);
    return choice;
  } else {
    alert(`${choice} is invalid input`);
    return playerInput();
  }
}

// const playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"').toLowerCase();
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
  const rounds = +prompt('How many rounds do you want to play? (Enter an integer)', '5');
  if (Number.isInteger(rounds)) {
    if (confirm(`This game of Rock Paper Scissors consists of ${rounds} rounds. Choose "OK" if you want to use the same choice for all ${rounds} rounds. Choose "No" if you want to make a new choice for every round.`)) {
      for (let i = 0; i < rounds; i++) {
        let playerResult = playRound(playerInput(), computerPlay()); //playerChoice will be the same for the whole round, computerplay will be generated every round
        points = points + playerResult;
      }
    } else {
      let choice = playerInput();
      for (let i = 0; i < rounds; i++) {
        let playerResult = playRound(choice, computerPlay()); //playerChoice will be the same for the whole round, computerplay will be generated every round
        points = points + playerResult;
      }
    }
    alert(`You scored ${points / 2} points, computer scored ${(rounds * 2 - points) / 2}!`)
  } else {
    alert(`That's not an integer. Please enter an integer (a positive whole number)`);
    game();
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