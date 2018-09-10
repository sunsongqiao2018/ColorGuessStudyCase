//alert("connected");

var colors = randomColorGenerator(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var goalcolorSetter = document.getElementById("goal");
var messageBar = document.getElementById("message");
var header = document.querySelector("h1");

goalcolorSetter.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
	//add initial colors for squares
	squares[i].style.backgroundColor = colors[i];

	//add click events for squares
	squares[i].addEventListener("click",function()
	{
		var clickColor = this.style.backgroundColor;

	if(pickedColor === clickColor)
	{
		//get the right color
		messageBar.textContent = "right!";
		changeColor(pickedColor);

	}
	else
	{
		//alert("wrong!");
		this.style.backgroundColor = "#232323";
		messageBar.textContent = "try again";
	}
	});
}

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
