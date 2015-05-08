/* Global Variable */
	var boxes = document.getElementsByClassName('box');
	var p1score = 0;
	var p2score = 0;


/* Player 1 and Player 2's name */
	var p1name = "Player 1";
	var p2name = "Player 2";
function player1name() {
	p1name = prompt("Please type your name.");
	document.getElementsByClassName("player1name")[0].innerHTML = p1name;
	document.getElementById("player1").innerHTML = p1name;
}
function player2name() {
	p2name = prompt("Please type your name.");
	document.getElementsByClassName("player2name")[0].innerHTML = p2name;
	document.getElementById("player2").innerHTML = p2name;
}



document.getElementsByClassName("player1name")[0].addEventListener("click", player1name);
document.getElementsByClassName("player2name")[0].addEventListener("click", player2name);

/* end of Player 1 and Player 2's name */


function newGame() {
	p1score = 0;
	p2score = 0;
	p1name = "Player 1";
	p2name = "Player 2";
	document.getElementsByClassName("player1name")[0].innerHTML = p1name;
	document.getElementById("player1").innerHTML = p1name;
	document.getElementsByClassName("player1name")[0].addEventListener("click", player1name);
	document.getElementsByClassName("player2name")[0].addEventListener("click", player2name);
	document.getElementById("player1score").innerHTML = p1score;
	document.getElementById("player2score").innerHTML = p2score;
	init();
}
document.getElementsByClassName("newGame")[0].addEventListener("click", newGame);

/* Start Game */
function init() {
	var playercount = 1;
	var counter = 0;
	var p1Image = "<img src=\"tac.jpeg\">";
	var p2Image = "<img src=\"tic.png\">"

/* Moves */
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].addEventListener('click', playermove);
		}

			function playermove(e) {

				function refreshBoard() {
					for (var i = 0; i < 9; i++) {
					boxes[i].innerHTML = "";
					boxes[i].addEventListener('click', playermove);
					counter = 0;
					// init();
					}	
				}
		document.getElementsByClassName("clearButton")[0].addEventListener("click", refreshBoard);
			  if (playercount % 2 !== 0) {
						e.target.innerHTML = p1Image;
						e.target.removeEventListener('click', playermove);
						playercount++;
						counter++

			  } else {
						e.target.innerHTML = p2Image;
						e.target.removeEventListener('click', playermove);
						playercount++;
						counter++
					}	
/* Winning Method */
		if (((boxes[0].innerHTML === p1Image) && (boxes[1].innerHTML === p1Image) && (boxes[2].innerHTML === p1Image)) || 
		   ((boxes[3].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[5].innerHTML === p1Image)) ||
	       ((boxes[6].innerHTML === p1Image) && (boxes[7].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) ||
 		   ((boxes[0].innerHTML === p1Image) && (boxes[3].innerHTML === p1Image) && (boxes[6].innerHTML === p1Image)) ||
 	  	   ((boxes[1].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[7].innerHTML === p1Image)) ||
		   ((boxes[2].innerHTML === p1Image) && (boxes[5].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) ||
		   ((boxes[0].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) ||
		   ((boxes[2].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[6].innerHTML === p1Image))) 
			{ 
			alert(p1name + " Wins");	
			p1score++;
				document.getElementById("player1score").innerHTML = p1score;
			refreshBoard();
			} 

	else if (((boxes[0].innerHTML === p2Image) && (boxes[1].innerHTML === p2Image) && (boxes[2].innerHTML === p2Image))||
		    ((boxes[3].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[5].innerHTML === p2Image))||
 	 	 	((boxes[6].innerHTML === p2Image) && (boxes[7].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image))||
			((boxes[0].innerHTML === p2Image) && (boxes[3].innerHTML === p2Image) && (boxes[6].innerHTML === p2Image))||
			((boxes[1].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[7].innerHTML === p2Image))||
			((boxes[2].innerHTML === p2Image) && (boxes[5].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image))||
			((boxes[0].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image))||
			((boxes[2].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[6].innerHTML === p2Image)))
			{
			alert(p2name + " Wins");
			refreshBoard();
			p2score++;
				document.getElementById("player2score").innerHTML = p2score;
			} 
	else if (counter === 9) {
			alert("Its a tie!");
			refreshBoard();
	}
/* End of winning method */


	}
}
/* end of Moves */



/* end of refresh the board */

window.addEventListener("load", init);