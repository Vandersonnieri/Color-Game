colorNumber = 6;
var colors = generateRandomColor(colorNumber);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var restartButton = document.querySelector("#restart");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

//reset game
restartButton.addEventListener("click", function(){
	colors = generateRandomColor(colorNumber);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	restartButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

//easy mode
easyButton.addEventListener("click", function(){
	colorNumber = 3;
	colors = generateRandomColor(colorNumber);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	restartButton.textContent = "New Colors";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
	  }
	  else{
	  	squares[i].style.display = "none";
	  }
	}
});

//hard mode
hardButton.addEventListener("click", function(){
	colorNumber = 6;
	colors = generateRandomColor(colorNumber);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	restartButton.textContent = "New Colors";
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			restartButton.textContent = "Play Again";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

//change all squares background color
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//pick a random color out of color rgb array
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate a random rgb array
function generateRandomColor(number){
	var arr = [];
	for(var i = 0; i < number; i++){
		arr.push(randomColor());
	}
	return arr;
}

//generate 3 random numbers for r g b 
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	
}






















