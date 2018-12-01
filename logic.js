// Add list of names here
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

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
let showTimer = null;
let timer = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = 'none';
	stopButton.style.display = 'inline';
	intervalHandle = setInterval(function() {
		names.textContent = nameList[i++ % nameList.length];
	}, 50);
	if (showTimer === true) {
		timerWrapper.classList.remove('visible');
	}
});

stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = 'inline';
	clearInterval(intervalHandle);
	timer.innerHTML = time;
	if (showTimer === true) {
		timerWrapper.classList.add('visible');
	}
	startTimer();
});