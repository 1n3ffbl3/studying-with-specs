VISUAL INTERPRETATION OF TABLE JS & HTML STRUCTURE: 

```js
function populateBoard() {
	var board = document.getElementById('ticTacBoard').children[0].children;
	var row;
	var column;
	for(var r = 0; r < 3; r++) {
		row = board[r].children; // tr => [td, td, td]
		for(var col = 0; col < 3; col++) {
			column = row[col]; //board[r].children[col] == td
			column.innerHTML = boardState[r][col];
		};
	};
}; 
``js

 <table id='ticTacBoard'>
    <tbody> <!-- table.children[0] -->
      <tr row='0'> <!-- table.children[0].children[0] -->
        <td column='0' onclick='play(this)'></td> <!-- table.children[0].children[0].children[0] -->
        <td column='1' onclick='play(this)'></td> <!-- table.children[0].children[0].children[1] -->
        <td column='2' onclick='play(this)'></td> <!-- table.children[0].children[0].children[2] -->
      </tr>
      <tr row='1'> <!-- table.children[0].children[1] -->
        <td column='0' onclick='play(this)'></td>
        <td column='1' onclick='play(this)'></td>
        <td column='2' onclick='play(this)'></td>
      </tr>
      <tr row='2'> <!-- table.children[0].children[2] -->
        <td column='0' onclick='play(this)'></td>
        <td column='1' onclick='play(this)'></td>
        <td column='2' onclick='play(this)'></td>
      </tr>
    </tbody>
  </table>


OR if there are thead AND tbody inside the table

<table>
    <thead><!-- table.children[0] -->
        <tr row='0'> <!-- table.children[0].children[0] -->
            <td column='0' onclick='play(this)'></td> <!-- table.children[0].children[0].children[0] -->
            <td column='1' onclick='play(this)'></td> <!-- table.children[0].children[0].children[1] -->
            <td column='2' onclick='play(this)'></td> <!-- table.children[0].children[0].children[2] -->
        </tr>
    </thead>
    <tbody><!-- table.children[1] -->
        <tr row='0'> <!-- table.children[1].children[0] -->
            <td column='0' onclick='play(this)'></td> <!-- table.children[1].children[0].children[0] -->
            <td column='1' onclick='play(this)'></td> <!-- table.children[1].children[0].children[1] -->
            <td column='2' onclick='play(this)'></td> <!-- table.children[1].children[0].children[2] -->
        </tr>
    </tbody>
</table>
