// defining querySelector shortcut variable to save time
const qs = (element) => document.querySelector(element);

// computer choice based on random number
const compPick = Math.random();

// setting parameters for computer choice
if (compPick < 0.33) {
	compPick = 'rock';
} else if (compPick <= 0.67) {
	compPick = 'paper';
} else {
	compPick = 'scissors';
}

const main = () => {
	if (playerOneChoice === compPick) {
		return 'Tie';
	}
	if (playerOneChoice === 'rock') {
		if ((compPick = 'scissors')) {
			return 'You Win';
		} else {
			return 'You Lose';
		}
	}
	if (playerOneChoice === 'scissors') {
		if ((compPick = 'paper')) {
			return 'You Win';
		} else {
			return 'You Lose';
		}
	}
	if (playerOneChoice === 'paper') {
		if ((compPick = 'rock')) {
			return 'You Win';
		} else {
			return 'You Lose';
		}
	}
};
document.addEventListener('DOMContentLoaded', main);
