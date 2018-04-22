BEHAVIOR of play function: If null equals to boardState from row AND column than it assigns the value of "x" or "o" into boardState[row][column] according to nextPlayer.Then it toggles nextPlayer. If not it shows alert : "grow up. you can\it do that".

Changed variables in populateBoard function:
 - "i" is changed to "row"
 - "j" is changed to "col"
I did it to make code more selfexplanating. 

 BEHAVIOR of populateBoard function: It populates the board for tictactoe game by iterating over all elements of boardState array and assigning its value to concrete field on the board by putting value of boardState[row][col] into document.getElementById(elementID).innerHTML property.
Then incrementing elementID by one. (Both iterators have to be less than 3 of the sides in the board).