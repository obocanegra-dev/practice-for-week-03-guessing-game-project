# Guessing Game Project

This is a simple number guessing game built with Node.js. The game allows the player to guess a randomly generated number within a defined range and a specific number of attempts.

## Features:
- Prompts the user to input the number of attempts they want.
- Prompts the user to define a minimum and maximum range for the secret number.
- The user then attempts to guess the secret number within the allowed attempts.
- After each guess, the game provides feedback if the guess is too high, too low, or correct.
- The game ends either when the player guesses correctly or exhausts all attempts.

## Requirements:
- Node.js must be installed to run this project.

## How to Run:
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/guessing-game.git
   ```
   
2. Navigate to the project directory:
   ```
   cd guessing-game
   ```

3. Run the game using Node.js:
   ```
   node guessing-game.js
   ```

4. Follow the prompts in the terminal:
   - Enter the number of attempts you want to make.
   - Enter the maximum and minimum values for the range of the secret number.
   - Guess the secret number within the allowed number of attempts.

## Code Breakdown:
- **readline module**: This module is used to interface with the user in the terminal and collect inputs.
- **randomInRange()**: This function generates a random number within a specified range.
- **askLimit()**: This function prompts the user to enter the number of attempts they want.
- **askRange()**: This function asks the user to provide the minimum and maximum number to set the secret number's range.
- **askGuess()**: This function asks the user to guess a number.
- **checkGuess()**: This function checks if the guessed number is too high, too low, or correct.

## Example Interaction:
```
Enter your number of attempts: 5
Enter a max number: 100
Enter a min number: 1
I'm thinking of a number between 1 and 100...
Enter a guess: 50
Too high.
Enter a guess: 25
Too low.
Enter a guess: 35
Correct!
You win!
```

## Improvements:
- Add input validation to ensure the user enters numeric values for range and attempts.
- Provide an option to play again after finishing the game.
- Implement more advanced features like difficulty levels.

## License:
This project is open-source and available under the [MIT License](LICENSE).
