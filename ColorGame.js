//alert("connected");
// var game = {};

// function game.init()
// {

// }
var game = {};
var colors = [];
var pickedColor;
var numberOfSquares = 6;


var squares = document.querySelectorAll(".square");
var goalcolorSetter = document.getElementById("goal");
var messageBar = document.getElementById("message");
var header = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modeControl");

game.init = function()
	{
		resetfun();
		buttonSetup();
		modeSetup();
	}
game.init();

reset.addEventListener("click",function(){resetfun()});

function buttonSetup()
{
for (var i = 0; i < modeButtons.length; i++) 
	{
	modeButtons[i].addEventListener("click",function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			resetfun()
		})
	}
}
function modeSetup()
{
	for (var i = 0; i < squares.length; i++) 
	{
		//add click events for squares
		squares[i].addEventListener("click",function()
		{
			var clickColor = this.style.backgroundColor;

		if(pickedColor === clickColor)
			{
				//get the right color
				messageBar.textContent = "right!";
				changeColor(pickedColor);
				reset.textContent = "Play Again!";

			}	
		else
			{
				//alert("wrong!");
				this.style.backgroundColor = "#232323"; //fade the color cube away to the background.

				messageBar.textContent = "try again";
			}
		})
	}
}

function resetfun()
{
		colors = randomColorGenerator(numberOfSquares);
		pickedColor = pickColor();
		goalcolorSetter.textContent = pickedColor;
		for (var i = 0; i < squares.length; i++) {
	//add initial colors for squares
		if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			}
		else
		{
			squares[i].style.display = "none";
		}
	}
		
		reset.textContent = "New Colors";
		header.style.backgroundColor = "steelblue";
		messageBar.textContent = "";
}

//game model choice
// modeButtons[1].addEventListener("click",function(){
// 	this.classList.add("selected");
// 	modeButtons[0].classList.remove("selected");
// 	modeSwitch(3);
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else 
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// modeButtons[0].addEventListener("click",function(){
// 	this.classList.add("selected");
// 	modeButtons[1].classList.remove("selected");
// 	modeSwitch(6);

// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}

// 		squares[i].style.display = "block";
// 	}

// });

// function modeSwitch(blocknum)
// {
// 	numberOfSquares = blocknum;
// 	colors = randomColorGenerator(blocknum);
// 	pickedColor = pickColor();
// 	goalcolorSetter.textContent = pickedColor;
	
// }
// hardBtn.addEventListener("mouseout",function(){hardBtn.classList.remove("selected")});

//hardBtn.addEventListener("click",function(){alert("worked!")});

function changeColor(getpickedColor)
{
	//instead of change the color square get, we can change the color directly.
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = getpickedColor;
	}
	header.style.backgroundColor = getpickedColor;

}

function pickColor()
{
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function randomColorGenerator(num)
{
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr
}

function randomColor()
{
	//generate red;
	var red = Math.floor(Math.random()*256);
	//generate green;
	var green = Math.floor(Math.random()*256);

	//generate blue
	var blue = Math.floor(Math.random()*256);
	var colorCode = "rgb(" +red+ ", " +green+ ", " +blue+ ")";
	return colorCode
}

function choiceLevel()
{
	var hardVersion = false;
	var easyVersion = false;
	var hardLevel = document.getElementById("hard");

	hardLevel.addEventListener("click",function(){
		hardVersion = true;
	})

	var easyLevel = document.getElementById("easy");
	
	esayLevel.addEventListener("click",function()
	{
		easyVersion = true;
	})
	console.log(hardVersion);
	if(hardVersion){
		console.log("actived")
		return 6;
	}
	if(easyVersion)
	{
		return 3;
	}

}
