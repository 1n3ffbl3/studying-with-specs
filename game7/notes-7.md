play function
        FULL BEHAVIOR: If null equals to boardState at row [row] and column [column] than depending on state (true/false) of nextPlayer it assigns the value of "x" or "o" into boardState[row][column]. After assignment it toggles nextPlayer. 
		Then refresh the board by calling function populateBoard.
		If boardState from box.id is not equal null,then it shows alert message.

Changed variables in populateBoard function:
 - "i" is changed to "row"
 - "j" is changed to "col"
I did it to make code more selfexplanating. 

 populateBoard function 
        FULL BEHAVIOR1: We assign all the rows, which are stored in HTMLCollection (table -> tbody -> [tr, tr, tr]), to board variable. We declare two support variables row and column, which at declaration time are undefined. After that we iterate over each row. For each row, we assign all the columns to given row (board[r].children), to "row" variable. Next, we iterate in nested loop over all the columns. For each column, we assign value of column to "column" variable (row[col]). It gives us access to concrete cell on the board. Then we assign the value of boardState[r][col] to column innerHTML property. 
		
buildBoard function 
 		FULL BEHAVIOR: First of all we declare two support variables row and cell, which at declaration time are undefined. We itearte 'm' times (3 as this is the size of board). In each iteration we add a row to the board with argument equal to current iteration index (by calling insertRow method from table element). Return value of this operation we assign to row variable. Additionally we add attribute 'row' to row variable (which is in fact tr) with current iteration index as value. After that we iterate 'n' times to create cells for each row ('n' is used, as 'm' was used previously. Also we iterate only 3 times as this is 3x3 board). In each iteration we add a cell to the row, by calling insertCell function on row variable. Return value is assigned to cell variable. In the next steps we assign the boardState into the innerHTML property of cell. Additionally we add column attribute, which value is current cell index. Moreover we add onclick attribute with call to play function with this argument to the cell.  


```js
window.addEventListener('DOMContentLoaded', function() {
	buildBoard();
});

/* 
	window - reference to window object
	addEventListener - method that add an listener on concrete event 
	DOMContentLoaded - event, When DOM  is fully loaded into the document variable
*/
```js

winner function 
		FULL BEHAVIOR: this function checks if any player (box) has a winning combination and if there is one, then it will display information that the player has won.