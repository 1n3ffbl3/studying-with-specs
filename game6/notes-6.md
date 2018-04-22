buildBoard function  (FULL)BEHAVIOR: First of all we declare two support variables row and cell, which at declaration time are undefined. We itearte 'm' times (3 as this is the size of board). In each iteration we add a row to the board with argument equal to current iteration index (by calling insertRow method from table element). Return value of this operation we assign to row variable. Additionally we add attribute 'row' to row variable (which is in fact tr) with current iteration index as value. After that we iterate 'n' times to create cells for each row ('n' is used, as 'm' was used previously. Also we iterate only 3 times as this is 3x3 board). In each iteration we add a cell to the row, by calling insertCell function on row variable. Return value is assigned to cell variable. In the next steps we assign the boardState into the innerHTML property of cell. Additionally we add column attribute, which value is current cell index. Moreover we add onclick attribute with call to play function with this argument to the cell.  


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