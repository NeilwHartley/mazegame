var ball = "ball.png";

var columns = ["a","b","c","d","e","f","g","h","i","j"];

var rows = [1,2,3,4,5,6,7];

var startColumn = columns.length - 1;
console.log(startColumn);

var startRow = rows.length - rows.length + 1;
console.log(startRow);

var startPosition = [columns[startColumn], rows[startRow]];
console.log(startPosition);

var newPosition = [columns[startColumn], rows[startRow]];

var column = newPosition[0];

var row = newPosition[1];

function moveBall() {
	document.getElementById(column + row).innerHTML = '<img src="ball.png" id="ball" />';
}

function oldPosition() {
	document.getElementById(column + row).innerHTML = "";
}

function moveLeft() {
	oldPosition();
	startColumn = startColumn - 1;
	newPosition = [columns[startColumn], rows[startRow]];
	console.log(newPosition);
	column = newPosition[0];
	row = newPosition[1];
	moveBall();
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


