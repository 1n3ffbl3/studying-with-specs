function buildBoard() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var r = 0; r < 3; r++) {
		row = board.insertRow(r);
		row.setAttribute('row', r);
		for(var c = 0; c < 3; c++) {
			cell = row.insertCell(c); 
			// why not set it to null directly?
			// because what if you want to finish a saved game?
			cell.innerHTML = boardState[r][c];
			cell.setAttribute('column', c);
			cell.setAttribute('onclick', 'play(this)');
		};
	};
};

window.addEventListener('DOMContentLoaded', function() {
	buildBoard();
});
