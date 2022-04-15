const buttons = document.querySelectorAll('.choices'); // select buttons from document
let pointsPlayer = 0;
let pointsComputer = 0;
const rounds = 1;
const gameResult = document.querySelector('.game-result');
const score = document.querySelector('.score');
const winner = document.querySelector('.chicken-dinner');
const reset = document.querySelector('.game-reset');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    playRound(e.target.innerHTML, computerPlay()); //run a round when a button is clicked. Listener for each button
  });
});

reset.addEventListener('click', () => {
  gameResult.textContent = "";
  pointsPlayer = 0;
  pointsComputer = 0;
  winner.textContent = "";
  score.textContent = 'Current score: 0 - 0';
  buttons.forEach((button) => {
    button.disabled = false;
  });
});

function computerPlay() {
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerResult = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerResult);
  return computerResult;
}

function playRound(playerSelection, computerSelection) {
  const gameContent = `${playerSelection}${computerSelection}`;
  const optionSet = new Set(["RockScissors", "PaperRock", "ScissorsPaper"]);
  if (playerSelection === computerSelection) {
    gameResult.textContent = `Computer chooses ${computerSelection}. It's a tie! You both chose ${playerSelection}...`;
    pointsPlayer += 1;
    pointsComputer += 1;
  } else if (optionSet.has(gameContent)) {
    gameResult.textContent = `Computer chooses ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}!`;
    pointsPlayer += 2;
  } else {
    gameResult.textContent = `Computer chooses ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}!`;
    pointsComputer += 2;
  }
  score.textContent = `Current score: ${pointsPlayer} (You) - ${pointsComputer} (Computer)`;

  if (pointsComputer >= 10 || pointsPlayer >= 10) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    if (pointsComputer < pointsPlayer) {
      winner.textContent = 'You win!';
    } else {
      winner.textContent = 'Computer beats human :-(!';
    }
  }
}