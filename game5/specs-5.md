 GLOBAL SCOPE: 
		BOOLEAN: nextPlayer
		  Initialized: true
          PURPOSE: to ensure the same player doesn't play twice in a row

        ARRAY: boardState
          Initialized: 3 Arrays, each with 3 null's
          PURPOSE: to keep track of the board outside of the DOM

METHODS: 2
	play: function
		ARGS: 1
			box: DOM object 
			PURPOSE: Give acccess to box object
	    RETURN: undefined

        VARIABLE1: row
            Initialized: Value of row attribute in DOM box element. 
            
        VARIABLE2: column
            Initialized: Value of column attribute in DOM box element.

		BEHAVIOR: If null equals to boardState at row [row] and column [column] than depending on state (true/false) of nextPlayer it assigns the value of "x" or "o" into boardState[row][column]. After assignment it toggles nextPlayer. 
		Then refresh the board by calling function populateBoard.
		If boardState from box.id is not equal null,then it shows alert message.

		PURPOSE: It says what is the order in game and what you can and can't do. Refresh the board if move is done correctly.

		DEPENDENCY: populateBoard
    
    populateBoard: function
        ARGS:0
        VARIABLE1: board
            Initialized:From DOM we have to take table and then tbody (which might be first or second child) and children of this tbody.
        VARIABLE2: row
            Initialized: undefined
        VARIABLE3: column
            Initialized: undefined
        RETURN: undefined

        PURPOSE: It writes the boardState into the html.  

        BEHAVIOR: We assign all the rows, which are stored in HTMLCollection (table -> tbody -> [tr, tr, tr]), to board variable. We declare two support variables row and column, which at declaration time are undefined. After that we iterate over each row. For each row, we assign all the columns to given row (board[r].children), to "row" variable. Next, we iterate in nested loop over all the columns. For each column, we assign value of column to "column" variable (row[col]). It gives us access to concrete cell on the board. Then we assign the value of boardState[r][col] to column innerHTML property.  
