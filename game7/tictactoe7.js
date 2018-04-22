var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

function play(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardState[row][column] == null) {	
			if(nextPlayer) {
				boardState[row][column] = 'x';
			} else {
				boardState[row][column] = 'o';
			};
			
			nextPlayer = !nextPlayer;
			// did someone win? 
			// if they did, change the state and redraw
			populateBoard();
			winner(boardState);
		} else {
			alert('grow up. you can\'t do that')
		};
};


function populateBoard() {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var r = 0; r < 3; r++) {
			row = board[r].children;
			for(var col = 0; col < 3; col++) {
				column = row[col];
				column.innerHTML = boardState[r][col];
			};
		};
	};

function winner(checkBoardState) {
    boxCheck('x');
    boxCheck('o');
  
    function boxCheck(box) {
      if (
        (checkBoardState[0][0] == box &&
          checkBoardState[1][0] == box &&
          checkBoardState[2][0] == box) ||
        (checkBoardState[0][1] == box &&
          checkBoardState[1][1] == box &&
          checkBoardState[2][1] == box) ||
        (checkBoardState[0][2] == box &&
          checkBoardState[1][2] == box &&
          checkBoardState[2][2] == box) ||
        (checkBoardState[0][0] == box &&
          checkBoardState[0][1] == box &&
          checkBoardState[0][2] == box) ||
        (checkBoardState[1][0] == box &&
          checkBoardState[1][1] == box &&
          checkBoardState[1][2] == box) ||
        (checkBoardState[2][0]== box &&
          checkBoardState[2][1] == box &&
          checkBoardState[2][2] == box) ||
        (checkBoardState[0][0] == box &&
          checkBoardState[1][1] == box &&
          checkBoardState[2][2] == box) ||
        (checkBoardState[2][0] == box &&
          checkBoardState[1][1] == box &&
          checkBoardState[0][2] == box)
      ) {
        alert(box + ' you won the game!!!');
        play = function() {
          alert('GAME OVER');
        };
      }
    }
  };