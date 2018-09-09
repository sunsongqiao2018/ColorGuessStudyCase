//alert("connected");

var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 0, 0)",
"rgb(0, 255, 255)",
"rgb(255, 255, 255)"
]

var squares = document.querySelectorAll(".square");

var pickedColor = colors[4];

var goalcolorSetter = document.getElementById("goal");
goalcolorSetter.textContent= pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors for squares
	squares[i].style.backgroundColor = colors[i];

	//add click events for squares
	squares[i].addEventListener("click",function()
	{
		var clickColor = this.style.backgroundColor;

	if(pickedColor === clickColor)
	{
		alert("right!");
	}else
	{
		alert("wrong!");
	}
	});
}