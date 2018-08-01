export const ENTER_GUESS = 'ENTER_GUESS'; 
export const enterGuess = guess => ({
    type: ENTER_GUESS, 
    guess
})

export const RESTART_GAME = 'RESTART_GAME'; 
export const restartGame = (newAnswer) => ({
    type: RESTART_GAME, 
    newAnswer
})