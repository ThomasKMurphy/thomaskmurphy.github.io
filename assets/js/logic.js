// List of names
/* const nameList = [
	'Matt',
	'Nick',
	'Adam',
	'Ryan',
	'JoeCat',
	'Terence',
	'Greg',
	'Corey',
	'Conor',
	'Richie',
	'Andrew',
	'Tom'
]; */

const nameList = [
	'Adam',
	'JoeCat',
	'Conor',
];



// Declare variables
let i = 0;
let spin = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const name = document.getElementById('name');

// Start or stop name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = 'none';
	stopButton.style.display = 'inline';

	spin = setInterval(function() {
		name.textContent = nameList[i++ % nameList.length];
	}, 60);
});

stopButton.addEventListener('click', function() {
	this.style.display = 'none';
	startButton.style.display = 'inline';

	clearInterval(spin);
});
