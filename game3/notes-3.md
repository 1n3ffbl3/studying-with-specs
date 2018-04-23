Functions can be called nearly from every part of the code. Function can be called inside another function / if statement / for,while loop. 
If the function cannot be called in some place, probably there will be syntax error OR message in the console.

function play 
        FULL BEHAVIOR: If null equals to boardState from box.id than depending on state (true/false) of nextPlayer it assigns th`e value of "x" or "o" into boardState[box.id]. After assignment it toggles nextPlayer. If boardState from box.id is not equal null, then it shows alert message. Optionally display the boardState to console log. 

populateBoard function 
        COMPREHENSIVE BEHAVIOR: It populates the board for tictactoe game by iterating over all elements of boardState array and assigning its value to concrete field on the board by putting value of boardState[i] into innerHTML property (the iterator have to be less than 9 the sides in the board).

