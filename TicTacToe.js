
/**************************************/
/*****           About            *****/
/**************************************/

// document.querySelector("#about").addEventListener("click", onClicked);


/**************************************/
/*****           BOARD            *****/
/**************************************/

var body = document.querySelector("body");
document.querySelector("#pink").addEventListener("click", function(){body.setAttribute("class","pinkBody");});
document.querySelector("#blue").addEventListener("click", function(){body.setAttribute("class","blueBody");});
document.querySelector("#green").addEventListener("click", function(){body.setAttribute("class","greenBody");});

/**************************************/
/*****           Game             *****/
/**************************************/

var player1Score = 0;
var player2Score = 0;
var player1ScoreDisplay = document.querySelector("#player1Score");
var player2ScoreDisplay = document.querySelector("#player2Score");

var player1Win = false;
var player2Win = false;

var playing = true;
var winningScore = Number(document.querySelector("input[name='numberOfGames']").value);
var winningScoreVar = document.querySelector("input[name='numberOfGames']");


/*****         NEW GAME         *****/

winningScoreVar.addEventListener("change", newgame)

document.querySelector("#newgame").addEventListener("click", newgame);


function newgame(){	
				winningScore = Number(document.querySelector("input[name='numberOfGames']").value);
				if(player1Score===winningScore|player2Score===winningScore){
					player1Score = 0;
					player2Score = 0;
					player1ScoreDisplay.textContent = 0;
					player2ScoreDisplay.textContent = 0;
					player1ScoreDisplay.classList.remove("winner");
					player2ScoreDisplay.classList.remove("winner");
					player1.classList.remove("winner");
					player2.classList.remove("winner");
				}
					playing=true;
					document.querySelector("#hello").textContent = "hello ";
					document.querySelector("#nowPlaying").textContent = "hello";
					cleaningTiles()
				}

/**************************************/
/*****           PLAYER           *****/
/**************************************/
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");

var player1Input = document.querySelector("#player1");
var player2Input =  document.querySelector("input[name='player2Name']");


var player2Name = document.querySelector("#player2Default");

/*****           NAME             *****/

// player2.addEventListener("click", function(){
// 										player2Input.setAttribute("class","playerName");
// 										player2Name.addEventListener("beforeinput", function(){
// 																				player2Input.setAttribute("class","d-none");
// 																				player2Name.text = document.querySelector("input[name='player2Name']").value;
																				
// 																				player2Name.setAttribute("class","player2Default")
// 																				}	
// 																	);
// 									}	
// 						);

						
/*****           SCORE            *****/


function winGame(){
	if (player1Score===winningScore) {
				player1ScoreDisplay.classList.add("winner");
				player1.classList.add("winner");
				playing=false;
				player1Win=true;
				document.querySelector("#hello").textContent = "player 1 Wins the Game";
				document.querySelector("#nowPlaying").textContent = "player 1 Wins the Game";
				};
	if (player2Score===winningScore) {
				player2ScoreDisplay.classList.add("winner");
				player2.classList.add("winner");
				playing=false;
				player2Win=true;
				document.querySelector("#hello").textContent = "player 2 Wins the Game";
				document.querySelector("#nowPlaying").textContent = "player 2 Wins the Game";
				};
	};


/**************************************/
/*****           BOARD            *****/
/**************************************/

function cleaningTiles(){
	var tile = document.querySelectorAll(".tile");
	for (var i = tile.length - 1; i >= 0; i--) {
		if(tile[i].classList.contains("occupied")){
			var x = document.querySelectorAll("div.X .xtile");
			var o = document.querySelectorAll("div.O .otile");
			for (var j = x.length - 1; j >= 0; j--) {
				x[j].classList.add("d-none");
			};
			for (var k = o.length - 1; k >= 0; k--) {
				o[k].classList.add("d-none");
			};
			tile[i].classList.remove("occupied")
		if (tile[i].classList.contains("X")){
			tile[i].classList.remove("X");
		}
		if (tile[i].classList.contains("O")){
			tile[i].classList.remove("O");
		}
		};
	};
};

clickingTIles()


function clickingTIles(){var boxClicked = document.querySelectorAll(".tile");
	for (var i = boxClicked.length - 1; i >= 0; i--) {
		boxClicked[i].addEventListener("click", onClicked);
	};
};

function onClicked(){
	if(playing){
		if(!this.classList.contains("occupied")){
				this.classList.add("tileOn");
				if (player1.classList.contains("playerOn")){
					var xtile = document.querySelector("div.tileOn .xTile");
					xtile.classList.remove("d-none");
					player1.classList.remove("playerOn");
					player2.classList.add("playerOn");
					this.classList.add("X");
				} else  if(player2.classList.contains("playerOn")) {
					var otile = document.querySelector("div.tileOn .oTile");
					otile.classList.remove("d-none");
					player2.classList.remove("playerOn");
					player1.classList.add("playerOn");
					this.classList.add("O")
				}
				this.classList.remove("tileOn");
				this.classList.add("occupied");
			};
			win();
		}
	}


var tile1 = document.querySelector(".tile1");
var tile2 = document.querySelector(".tile2");
var tile3 = document.querySelector(".tile3");
var tile4 = document.querySelector(".tile4");
var tile5 = document.querySelector(".tile5");
var tile6 = document.querySelector(".tile6");
var tile7 = document.querySelector(".tile7");
var tile8 = document.querySelector(".tile8");
var tile9 = document.querySelector(".tile9");
function win(){
			if(playing){
				if(tile1.classList.contains("X")&tile2.classList.contains("X")&tile3.classList.contains("X")||
					tile4.classList.contains("X")&tile5.classList.contains("X")&tile6.classList.contains("X")||
					tile7.classList.contains("X")&tile8.classList.contains("X")&tile9.classList.contains("X")||
					tile1.classList.contains("X")&tile4.classList.contains("X")&tile7.classList.contains("X")||
					tile2.classList.contains("X")&tile5.classList.contains("X")&tile8.classList.contains("X")||
					tile3.classList.contains("X")&tile6.classList.contains("X")&tile9.classList.contains("X")||
					tile1.classList.contains("X")&tile5.classList.contains("X")&tile9.classList.contains("X")||
					tile3.classList.contains("X")&tile5.classList.contains("X")&tile7.classList.contains("X")){
				// adding points
					player1Score++;
					// displaying score
					player1ScoreDisplay.textContent = player1Score;
					document.querySelector("#nowPlaying").textContent = "player 1 Won this Round";
					playing=false;
					winGame()
				};
				if(tile1.classList.contains("O")&tile2.classList.contains("O")&tile3.classList.contains("O")||
					tile4.classList.contains("O")&tile5.classList.contains("O")&tile6.classList.contains("O")||
					tile7.classList.contains("O")&tile8.classList.contains("O")&tile9.classList.contains("O")||
					tile1.classList.contains("O")&tile4.classList.contains("O")&tile7.classList.contains("O")||
					tile2.classList.contains("O")&tile5.classList.contains("O")&tile8.classList.contains("O")||
					tile3.classList.contains("O")&tile6.classList.contains("O")&tile9.classList.contains("O")||
					tile1.classList.contains("O")&tile5.classList.contains("O")&tile9.classList.contains("O")||
					tile3.classList.contains("O")&tile5.classList.contains("O")&tile7.classList.contains("O")){
					player2Score++;
					// displaying score
					player2ScoreDisplay.textContent = player2Score;
					document.querySelector("#nowPlaying").textContent = "player 2 Won this Round";
			
					playing=false;
					winGame()
				};

			};
		};


/**************************************/
/*****         FUNCTIONS          *****/
/**************************************/


// red color wining line
