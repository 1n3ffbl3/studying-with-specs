GLOBAL SCOPE: 
		BOOLEAN: nextPlayer
		  Initialized: true
          PURPOSE: to ensure the same player doesn't play twice in a row

        ARRAY: boardState
          Initialized: 3 Arrays, each with 3 null's
          PURPOSE: to keep track of the board outside of the DOM

METHODS: 5
	play: function
		ARGS: 1
			box: DOM object 
			PURPOSE: Give acccess to box object (clicked) 
	    RETURN: undefined

        VARIABLE1: row
            Initialized: Value of row attribute in DOM box element, accessing by parent 
            
        VARIABLE2: column
            Initialized: Value of column attribute in DOM box element.

	    BEHAVIOR: If null equals to boardState from two variables than it assigns different values according to nextPlayer. After that it checks if there is already a winner on the board. If not, then it toggles nextPlayer and populate changes on the board. If not it shows alert.
      

		PURPOSE: First it checks if someone did win. If someone did win it redraws board with all changes.
    
    populateBoard: function
        ARGS:0
        VARIABLE1: board
            Initialized: From DOM we have to take table(parent element) and then tbody (which might be first or second child) and children of this tbody.
        VARIABLE2: row
            Initialized: undefined
        VARIABLE3: column
            Initialized: undefined

        RETURN: undefined

        PURPOSE: It writes the boardState into the html. 

        BEHAVIOR: We assign all the rows, which are stored in HTMLCollection (table -> tbody -> [tr, tr, tr]), to board variable. We declare two support variables row and column, which at declaration time are undefined. After that we iterate over each row. For each row, we assign all the columns to given row (board[r].children), to "row" variable. Next, we iterate in nested loop over all the columns. For each column, we assign value of column to "column" variable (row[col]). It gives us access to concrete cell on the board. Then we assign the value of boardState[r][col] to column innerHTML property. 

    buildBoard: function
        ARGS:0
        VARIABLE1: board
        Initialized: From DOM we have to take table element by his id.

        VARIABLE2: row
        Initialized: undefined

        VARIABLE3: cell
        Initialized: undefined

        BEHAVIOR: We declare all variables that are specified. For each row, we add a row to the board at given index and assign return value to row variable. Additionally we add row attribute with current index. We iterate n-times, where n is defined as number of columns per row. In each iteration we create a cell by calling insertCell(index) and assign the return value to cell variable. In next lines we set innerHTML prop of cell corresponding state in boardState array. After that we add two attributes: column(current index) and onclick which is a event trigger with value "play(this)".
    
    window: object
        Purpose: Reference to window object
        
        BEHAVIOR:  It uses method which adds a listener on 'DOMContentLoaded' event and creates new function which calls buildBoard function. 

    winner: function
        ARGS: 1
        checkBoardState: two dimensional array with states
        Purpose: Check when someone wins
        BEHAVIOR: It calls two functions... In the nested function which takes one argument which is DOM object. 
        METHODS: 1
            boxCheck: function
                ARGS: 1 
                box: anyvalue
                Purpose: Check if "x" or "o" wins
                BEHAVIOR: It checks all combinations for tictactoe game, if a player has winning condition.

        




			


