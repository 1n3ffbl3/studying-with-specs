GLOBAL SCOPE: 1
	BOOLEAN: nextPlayer
		Initialized: true

METHODS: 1
	play: function
		ARGS: 1
			box: DOM object
				PURPOSE: Give acccess to box object
		RETURN: undefined

		BEHAVIOR: assign the value of "x" or "o" into box.innerHTML depending on nextPlayer. Then toggles nextPlayer to opposite state (true/false).
		
		PURPOSE: it manages the sequence of movements performed by players. The first player makes the move then the turn comes on the second player.
			


