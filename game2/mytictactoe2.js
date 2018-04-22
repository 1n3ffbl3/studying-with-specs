let nextPlayer = true;

let boardState = [
    null, null, null,
    null, null, null,
    null, null, null,
];

function play(box){
    if(boardState[box.id] == null){
        if(nextPlayer){
            boardState[box.id] = 'x';
            nextPlayer = false;
        }else{
            boardState[box.id] = 'o';
            nextPlayer = true;
        }
        //nextPlayer = !nextPlayer
    }else{
        alert('You can/t do this in this game.')
    }
};
