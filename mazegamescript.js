var ball = "ball.png";

var columns = ["a","b","c","d","e","f","g","h","i","j"];

var rows = [1,2,3,4,5,6,7];

var startColumn = columns.length - 1;
console.log(startColumn);

var startRow = 1;
console.log(startRow);

var startPosition = [columns[startColumn], rows[startRow]];
console.log(startPosition);

var newPosition = [columns[startColumn], rows[startRow]];

var column = newPosition[0];

var row = newPosition[1];

var checkColumn = startColumn - 1;
var checkLeft = [columns[checkColumn], rows[startRow]];
var leftCell = checkLeft[0];


//For onclick Start button or reset ball position mid-game NH
function newGame() {
	document.getElementById("j" + 2).innerHTML = '<img src="ball.png" id="ball" /'; //Don't care that this uses j2 
}

//For adding ball image to new position NH
function moveBall() {
	document.getElementById(column + row).innerHTML = '<img src="ball.png" id="ball" />';
}

//For deleting image from old position NH
function oldPosition() {
	document.getElementById(column + row).innerHTML = "";
}

//For moving left NH
function moveLeft() {
	oldPosition();
	startColumn = startColumn - 1;
	newPosition = [columns[startColumn], rows[startRow]];
	console.log(newPosition);
	checkColumn = startColumn - 1;
	column = newPosition[0];
	row = newPosition[1];
	moveBall();
}

/*For checking if 'wall' border is present in cell one to the left of current position. 
All borders are set to be right not left.
Stuck here. No errors but not working.
Tried innerHTML to change border property and that did work NH */
function leftWallBlock () {
	if (document.getElementById(leftCell + row).style.borderRight == "solid") {
		
	} else {
		moveLeft();
}
}

function moveRight() {
	oldPosition();
	startColumn = startColumn + 1;
	newPosition = [columns[startColumn], rows[startRow]];
	console.log(newPosition);
	column = newPosition[0];
	row = newPosition[1];
	moveBall()
}

function moveUp() {
	oldPosition();
	startRow = startRow - 1;
	newPosition = [columns[startColumn], rows[startRow]];
	console.log(newPosition);
	column = newPosition[0];
	row = newPosition[1];
	moveBall();
}

function moveDown() {
	oldPosition();
	startRow = startRow + 1;
	newPosition = [columns[startColumn], rows[startRow]];
	console.log(newPosition);
	column = newPosition[0];
	row = newPosition[1];
	moveBall();
}
