// Number Guessing Game project
const numberGuessingGame = () => {
    const randNum = Math.floor(Math.random() * 10) + 1;
    
    for (let i = 5; i > 0; i--) {
        let userGuess = prompt('Enter a number from 1 - 10: ')
        let userNum = Number(userGuess)
        
    if (!userGuess || isNaN(userNum)) {
        console.log('Invalid input! please enter a number')
        
    } else if (userNum > 0 && userNum < 11) {
        if (userNum > randNum) {
            console.log('Your guess is too high ')
        } else if (userNum < randNum) {
            console.log('Your guess is too low')
        } else {
            console.log('Congrats! you guessed the correct number')
            return `Random number is ${randNum}`
        }
        
    } else {
        console.log('Number is not within the range')
    }
    
        if(i === 1) {
            console.log('Attempts exceeded')
            return `Random number is ${randNum}`
        }
        console.log(`Attempts left ${i - 1}`)
}
};
numberGuessingGame();
