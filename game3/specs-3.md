GLOBAL SCOPE: 1
		BOOLEAN: nextPlayer

		  Initialized: true

		  PURPOSE: to ensure the same player doesn't play twice in a row

        ARRAY: boardState

          Initialized: 9 null's
		  
		  PURPOSE: to keep track of the board outside of the DOM

METHODS: 2
	play: function
		ARGS: 1
			box: DOM object 
				PURPOSE: Give acccess to box object 
		RETURN: undefined

		BEHAVIOR: If null equals to boardState from box.id than depending on state (true/false) of nextPlayer it 
        assigns th`e value of "x" or "o" into boardState[box.id]. After assignment it toggles nextPlayer. 
		Then refresh the board by calling function populateBoard.
		If boardState from box.id is not equal null,then it shows alert message.

		PURPOSE: It says what is the order in game and what you can and can't do. Refresh the board if move is done correctly.

		DEPENDENCY: populateBoard
    
    populateBoard: function
        ARGS:0
    
        RETURN: undefined

        BEHAVIOR: It populates the board for tictactoe game by iterating over all elements of boardState array and assigning its value to concrete field on the board by putting value of boardState[i] into innerHTML property.

		PURPOSE: It refresh the board
			


