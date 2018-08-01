import { ENTER_GUESS, RESTART_GAME } from '../actions/index';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const hotcoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_GUESS:
            let feedback, guess; 
            guess = parseInt(action.guess, 10);
            if (isNaN(guess)) {
                feedback = 'Please enter a valid number'
            }
            const difference = Math.abs(guess - state.correctAnswer);
            if (difference >= 50) {
                feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
                feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
                feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
                feedback = 'You\'re Hot!';
            } else {
                feedback = 'You got it!';
            }
            return Object.assign({}, state, { feedback, guesses: [...state.guesses, guess] })

        case RESTART_GAME:
            return Object.assign({}, state, {
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.round(Math.random() * 100) + 1
            });

        default:
            return state;
    }

}