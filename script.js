// Number Guessing Game project
const numberGuessingGame = () => {
    const randNum = Math.floor(Math.random() * 11)
    for (let i = 5; i > 0; i--) {
        let userGuessNum = Number(prompt('Enter a number within 0 - 10: '))
    if (userGuessNum > 0 && userGuessNum < 10) {
        if (userGuessNum > randNum) {
            console.log('Your guess is too high ')
        } else if (userGuessNum < randNum) {
            console.log('Your guess is too low')
        } else {
            console.log('Congrats! you guessed the correct number')
            return `Random number is ${randNum}`
        }
    } else if (userGuessNum < 0 || userGuessNum > 11) {
        console.log('Number is not within the range')
    } else {
        console.log('Invalid input! please enter a number')
    }
        if(i === 1) {
            console.log('Attempts exceeded')
            return `Random number is ${randNum}`
        }
        console.log(`Attempts left ${i - 1}`)
}
};
console.log(numberGuessingGame());
