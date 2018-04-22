
let nextPlayer = true;

let boardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function play(box){
    let row = box.getAttribute('row');
    let column = box.getAttribute('column');
if (boardState[row][column]== null){
    if(nextPlayer){
        boardState[row][column] ="x";
        nextPlayer = false;
    }else{
        boardState[row][column] ="o";
        nextPlayer = true;
    }
        populateBoard();
}else{
        alert("You can\t do that")
    }
};

function populateBoard(){
    let elementID = 0;
    for(row=0, row<3, row++) {
        for(col=0, col<3, col++) {
        document.getElementById(elementID).innerHTML == boardState[row][col];
        elementID++;
        };
    };
};