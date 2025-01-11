const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const askLimit = () => rl.question("Enter your number of attempts: ", attempts => {
    numAttempts = attempts;
    askRange();
});

const askRange = () => rl.question("Enter a max number: ", max => {
    rl.question("Enter a min number: ", min => {
        secretNumber = randomInRange(Number(min), Number(max));
        console.log(`I'm thinking of a number between ${min} and ${max}...`);
        askGuess();
    });
})

const askGuess = () => rl.question("Enter a guess: ", number => {
    const guess = checkGuess(Number(number));
    if (guess === true) {
        console.log("You win!");
        rl.close();
    } else {
        numAttempts--;
        if (numAttempts === 0) {
            console.log("You lose.");
            rl.close();
        } else{
            askGuess();
        }
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

askLimit();
