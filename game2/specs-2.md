GLOBAL SCOPE: 1
		BOOLEAN: nextPlayer
		  Initialized: true
        ARRAY: boardState
          Initialized: 9 null's

METHODS: 1
	play: function
		ARGS: 1
			box: DOM object 
				PURPOSE: Give acccess to box object (clicked) and shows what is inside
		RETURN: undefined

		BEHAVIOR: If null equals to boardState from box.id than depending on state (true/false) of nextPlayer it 
        assigns th`e value of "x" or "o" into boardState[box.id]. After assignment it toggles nextPlayer. If boardState from box.id is not equal null, then it shows alert message.
        Optionally display the boardState to console log. 

		PURPOSE: It says what is the order in game and what you can and can't do. In the end it shows which cells are empty and which aren't.
			


