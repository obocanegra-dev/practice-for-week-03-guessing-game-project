const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = 5;

const askGuess = () => rl.question("Enter a guess: ", number => {
    const guess = checkGuess(Number(number));
    if (guess === true) {
        console.log("You win!");
        rl.close();
    } else {
        askGuess();
    }
});

const checkGuess = number => {
    if (number > secretNumber) {
        console.log("Too high.");
        return false;
    } else if (number < secretNumber) {
        console.log("Too low.");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

askGuess();
