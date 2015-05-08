var p1name = "Player 1";
var p2name = "Player 2";
var boxes = document.getElementsByClassName('box');
var playercount = 1;
var counter = 0;
var p1Image = "<img src=\"tac.jpeg\">";
var p2Image = "<img src=\"tic.png\">"


/* Player 1 and Player 2's name */
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



/* Start Game */

// document.getElementsByClassName("startGame")[0].addEventListener("click", init);

// function init() {
//  for ()
	
// }

/* Moves */
for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', playermove);
	// boxes[i].addEventListener('click', function() {
}

function playermove(e) {
  if (playercount % 2 !== 0) {
			e.target.innerHTML = p1Image;
			playercount++;
			counter++

  } else {
			e.target.innerHTML = p2Image;
			playercount++;
			counter++
		}	
/* Winning Situation */
		if ((boxes[0].innerHTML === p1Image) && (boxes[1].innerHTML === p1Image) && (boxes[2].innerHTML === p1Image)) {
		alert(p1name + " Wins");	
	} else if ((boxes[3].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[5].innerHTML === p1Image)) {
		alert(p1name + " Wins");		
	} else if ((boxes[6].innerHTML === p1Image) && (boxes[7].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) {
		alert(p1name + " Wins");	
	} else if ((boxes[0].innerHTML === p1Image) && (boxes[3].innerHTML === p1Image) && (boxes[6].innerHTML === p1Image)) {
		alert(p1name + " Wins");		
	} else if ((boxes[1].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[7].innerHTML === p1Image)) {
		alert(p1name + " Wins");	
	} else if ((boxes[2].innerHTML === p1Image) && (boxes[5].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) {
		alert(p1name + " Wins");	
	} else if ((boxes[0].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[8].innerHTML === p1Image)) {
		alert(p1name + " Wins");		
	} else if ((boxes[2].innerHTML === p1Image) && (boxes[4].innerHTML === p1Image) && (boxes[6].innerHTML === p1Image)) {
		alert(p1name + " Wins");	
	} else if ((boxes[0].innerHTML === p2Image) && (boxes[1].innerHTML === p2Image) && (boxes[2].innerHTML === p2Image)) {
		alert(p2name + " Wins");	
	} else if ((boxes[3].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[5].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if ((boxes[6].innerHTML === p2Image) && (boxes[7].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if ((boxes[0].innerHTML === p2Image) && (boxes[3].innerHTML === p2Image) && (boxes[6].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if ((boxes[1].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[7].innerHTML === p2Image)) {
		alert(p2name + " Wins");	
	} else if ((boxes[2].innerHTML === p2Image) && (boxes[5].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if ((boxes[0].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[8].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if ((boxes[2].innerHTML === p2Image) && (boxes[4].innerHTML === p2Image) && (boxes[6].innerHTML === p2Image)) {
		alert(p2name + " Wins");
	} else if (counter === 9) {
		alert("Its a tie!");
	}
/* Winning Situation */
	e.target.removeEventListener('click', playermove);

}
/* end of Moves */

/* Refresh Board */








