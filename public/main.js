const main = () => {
	if (document.querySelector('h1.hello-world')) {
		document.querySelector('h1.hello-world').textContent =
			'Rock, Paper, Scissors!';
	}
};

document.addEventListener('DOMContentLoaded', main);
