let nextPlayer = true;

let boardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function play(box) {
    let row = box.getAttributeById('row');
    let column = box.getAttributeById('column');
    if (boardState[row][column] == null) {
        if (nextPlayer) {
            boardState[row][column] = "x";
            nextPlayer = false;
        } else {
            boardState[row][column] = "o";
            nextPlayer = true;
        }
        populateBoard();
    } else {
        alert("Not this time!")
    }
};

function populateBoard() {
    let board = document.getElementById("ticTactBoard").children[0].children;
    let row;
    let column;
    for (let r = 0; r < 3; ++r) {
        row = board[r].children;
        for (let col = 0; col < 3; ++col) {
            column = row[col];
            column.innerHTML = boardState[r][col]
        }
    }
}