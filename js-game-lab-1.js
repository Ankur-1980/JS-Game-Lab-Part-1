const play = confirm('Would you like to battle the Almighty Grant?');

if (play == true) {
	const name = prompt('You seem like a brave soul. What is your name?');
	console.log(name);
} else {
	alert('Run away you COWARD!!!');
}

let hits = 0;
let playerHealth = 40;
let result = '';
do {
	hits++;
	result = playerHealth - (Math.floor(Math.random() * 2) + 1);
	console.log(result);
} while (result != 0);
