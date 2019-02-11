document.addEventListener("DOMContentLoaded", function() {
  // King will have class of "king" maybe depending on player?
  var board = document.getElementById("board");
  //var squares = document.getElementsByClassName("square");
  function generateBoard(board_div, number_of_rows, row_length) {
  	console.log("Generating board.")
    for (var i = 0; i < number_of_rows.length; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      for (var x = 1; x <= row_length; x++) {
      	var cell = document.createElement("div");
      	cell.classList.add("square")
      	if (x % 2 == 0) {
      		cell.classList.add("light_square");
      	} else {
      		cell.classList.add('dark_square');
      	}
      	// Can add a square piece here howecer that will be
      	row.appendChild(cell);
      }
      board_div.appendChild(row);
    }
  }
  generateBoard(board, 8, 8)
})