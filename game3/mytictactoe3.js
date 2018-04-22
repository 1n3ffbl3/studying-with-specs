
let nextPlayer = true;
let boardState = [
    nulls, nulls nulls,
    nulls, nulls nulls,
    nulls, nulls nulls
];

function play(box){
    if(boardState[box.id] ==null){
        boardState[box.id] ="x";
    }if else{
        boardState[box.id] ="o";

    }if else{
        nextPlayer != nextPlayer
    }else{
        alert("grow up. you can\it do that");
    }
};

function populateBoard(){
    for(i=0, i<9, i++){
        box.innerHTML = boardState[i];
    }
};

