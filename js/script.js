function computerPlay() {
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  let optionRandomizer = Math.floor(Math.random() * computerOptions.length);
  let computerChoice = computerOptions[optionRandomizer];
  console.log(optionRandomizer, computerChoice);
  return computerChoice;
}

/*
//Check and print i repetitions of computerPlay
let rock = 0;
let paper = 0;
let scissors = 0;

for (let i = 0; i < 10000; i++) {
  let toCount = computerPlay();
  switch (toCount) {
    case 'Rock':
      rock++;
      break
    case 'Paper':
      paper++;
      break
    case 'Scissors':
      scissors++;
      break
  }
}

console.log(rock, paper, scissors);*/