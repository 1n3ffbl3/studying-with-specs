nextPlayer= true;

boardState= [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function play(box){
    let row= document.parentElement.getElementById()
    let column;
    if (boardState[row][column]== null){
        if(nextPlayer){
            boardState[row][column] = "x";
            nextPlayer = false;
        }else{
            boardState[row][column] = "o";
            nextPlayer = true;
        };
        winner(boardState);
        populateBoard();
    } else{
        alert('Sometimes no move it the best move')
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