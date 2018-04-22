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
			PURPOSE: Give acccess to box object (clicked) 
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
        VARIABLE1: elementID
            Initialized:0
        RETURN: undefined

        PURPOSE: It writes the boardState into the html.

        BEHAVIOR: For each row, we iterate over its columns.  This represents the current position on the board. We assign the value from the board of [row][column] into the correct td element in the html, which is selected by using elementID. After assignement of the value, we increment the elementID by 1, so it moves to next td element.  

        
			


