//This will be refactored to randomize colors. Will start with each square having it's own color.

//we hard coded 6 colors we are going to randomize those numbers now
/**var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];*/

var colors = generateRandomColors(6);

//select all squares loop through them and assign each a color
var squares = document.querySelectorAll(".square");
//chosen rgb color is displayed, we will hard code for now
//var pickedColor = colors[3];
//Created a function to randomize color.
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change Color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to sqaures
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare clicked square color to picked square  
        if(pickedColor === clickedColor){
            messageDisplay.textContent = "Correct!";
            //when click correct color background of all sqaures and the h1 turn that color
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again";
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

//created function to keep code clean, changes all colors in squares to the clicked color
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//function used to pick a random rgb color
function pickColor(){
    //pick a random number from 0 to 255. We will use math.random which gives random 
    //num between 0 and 1 but not including 1. Math.floor would chop off decimal
    var random = Math.floor(Math.random() * colors.length); //we may want 3 or 6 squares
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
/**Logic for click events: 
 * When click on one of the squares, run code to figure out what the color of the square is
 * that we clicked on, once we have the clicked color we will compare it to the picked color,
 * If different, change the background color of clicked square so it dissapears.
 * If they are the same, the player has won.
 */