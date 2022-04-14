// game(); autostarts game

const buttons = document.querySelectorAll('button'); // select buttons from document
let pointsPlayer = 0;
let pointsComputer = 0;
const rounds = 1;
const gameResult = document.querySelector('.game-result');
const score = document.querySelector('.score');
console.log(score);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(playerChoice(button.id), computerPlay()); //run a round when a button is clicked. Listener for each button
  });
});

function playerChoice(id) {
  switch (id) {
    case 'btn-rock':
      return 'rock';
    case 'btn-paper':
      return 'paper';
    default:
      return 'scissors';
  }
}

function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerResult = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerResult);
  return computerResult;
  // return computerResult; //Uncomment to run check section
}

function playRound(playerSelection, computerSelection) {
  const gameContent = `${playerSelection}${computerSelection}`;
  const optionSet = new Set(["rockscissors", "paperrock", "scissorspaper"]);
  if (playerSelection === computerSelection) {
    alert(`Tie! You both chose ${playerSelection}...`);
    pointsPlayer += 1;
    pointsComputer += 1;
  } else if (optionSet.has(gameContent)) {
    alert(`You win! ${playerSelection} beats ${computerSelection}!`);
    pointsPlayer += 2;
  } else {
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    pointsComputer += 2;
  }
}

function game() {
  let points = 0;

  // const rounds = +prompt('How many rounds do you want to play? (Enter an integer, 5 is recommended)', '5'); //uncomment to play multiple rounds
  const rounds = 1; // comment out for multiple rounds

  // uncomment below code to return to playing multiple rounds and have more choices. Current state plays 1 round
  //  if (Number.isInteger(rounds)) {
  //    if (confirm(`This game of Rock Paper Scissors consists of ${rounds} rounds. Choose "OK" if you want to use the same choice for all ${rounds} rounds. Choose "No" if you want to make a new choice for every round.`)) {
  //      for (let i = 0; i < rounds; i++) {
  //        let playerResult = playRound(playerInput(), computerPlay()); //playerChoice will be the same for the whole round, computerplay will be generated every round
  //        points = points + playerResult;
  //      }
  //    } else {
  //      let choice = playerInput();
  //      for (let i = 0; i < rounds; i++) {
  //        let playerResult = playRound(choice, computerPlay()); //playerChoice will be the same for the whole round, computerplay will be generated every round
  let playerResult = playRound(playerInput(), computerPlay()); // remove when returning to multiround games
  points = points + playerResult;
  //      }
  //    }
  alert(`You scored ${points / 2} points, computer scored ${(rounds * 2 - points) / 2}!`)
  //  } else {
  //    alert(`That's not an integer. Please enter an integer (a positive whole number)`);
  //    game();
  //  }
}

/* // obsolete when using UI
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
*/

// const playerChoice = prompt('Choose "Rock", "Paper" or "Scissors"').toLowerCase();
// const computerChoice = computerPlay(); generated every time when playing multiple rounds
// playRound(playerChoice, computerChoice); will be invoked from game() for multiple rounds

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