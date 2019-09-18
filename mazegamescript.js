var ball = "ball.png";

var column = ["a","b","c","d","e","f","g"];

var row = [1,2,3,4,5,6,7,8,9,10];

var startColumn = column[column.length - 1];
var startRow = row[row.length - row.length + 1];

var startPosition =[startRow];
console.log(startPosition);

function moveLeft() {
	startPosition = startPosition[startRow -1];
	console.log(startPosition);
}

