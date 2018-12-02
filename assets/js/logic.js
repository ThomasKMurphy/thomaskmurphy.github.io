// List of names
const nameList = [
	'Matt',
	'Brendan',
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
];

// Declare variables
let i = 0;
let spin = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const name = document.getElementById('names');

// Start or stop name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = 'none';
	stopButton.style.display = 'inline';

	spin = setInterval(function() {
		names.textContent = nameList[i++ % nameList.length];
	}, 60);
});

stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = 'inline';

	clearInterval(spin);
});