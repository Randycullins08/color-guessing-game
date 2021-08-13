const COLORS_ARRAY = [
  "gold",
  "blue",
  "cyan",
  "gray",
  "green",
  "magenta",
  "orange",
  "red",
  "white",
  "yellow",
];
COLORS_ARRAY.sort();

function user() {
  let player = {
    name: null,
  };

  player.name = prompt("To play enter your first and last name:");
  if (!player.name) {
    alert("This game is cancelled.");
    return;
  } else {
    alert("Thank you, lets get started " + player.name + "!");
    runGame();
  }
}

function runGame() {
  let guess = "";
  let correct = false;
  let numTries = 0;
  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
  const target = COLORS_ARRAY[targetIndex];
  console.log("The target is " + target);
  do {
    guess = prompt(
      "I am thinking of one of these colors:\n\n" +
        COLORS_ARRAY.join(", ") +
        " What color am I thinking of?\n"
    );

    if (guess === null) {
      alert("This game is cancelled.");
      return;
    }
    correct = checkGuess(guess.toLowerCase(), target, numTries);
    numTries++;
  } while (!correct);
  alert(
    "Congratulations! The correct color was " +
      target +
      "!\n\nIt took you " +
      numTries +
      " attempt(s) to guess correctly!\n"
  );
  document.body.style.background = guess;
}
function checkGuess(guess, target, numTries) {
  let correct = false;
  if (!COLORS_ARRAY.includes(guess)) {
    numTries++;
    alert(
      "Sorry, I don't recognize your color.\n\nYou've tried " +
        numTries +
        " attempt(s)\n\nPlease try again.\n"
    );
  } else if (guess > target) {
    numTries++;
    alert(
      "Sorry, your guess is incorrect.\n\nHint: your color is alphabetically higher than mine.\n\nYou've tried " +
        numTries +
        " attempt(s)\n\nPlease try again.\n"
    );
  } else if (guess < target) {
    numTries++;
    alert(
      "Sorry, your guess is incorrect.\n\nHint: your color is alphabetically lower than mine.\n\nYou've tried " +
        numTries +
        " attempt(s)\n\nPlease try again.\n"
    );
  } else {
    correct = true;
  }
  return correct;
}
