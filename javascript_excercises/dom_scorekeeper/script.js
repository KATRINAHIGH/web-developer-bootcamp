var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.getElementById("number");
var maxScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){ //if gameOver is false
        p1Score++; //add 1 to score
        if(p1Score === winningScore){ //if score equals winningScore
            p1Display.classList.add("winner");
            gameOver = true; //then set gameOver to true
        }
        p1Display.textContent = p1Score;  //change score to current score with p1Score count
    }  
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;  
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    maxScoreDisplay.textContent = numInput.value; //.value returns the value entered in the input box
    // maxScoreDisplay.textContent = this.value; refactor to use this
    winningScore = Number(numInput.value); //make winning score equal the input value, cast as Number cus .value returns a string
    //and the === does not compare and will never update in if statements
    reset();//want to reset if change max score in the middle of the game
});

function reset(){
    p1Score = 0;//reset score count to 0
    p2Score = 0;
    p1Display.textContent = 0; //reset text in display to 0
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");//reset color of winning number to black
    p2Display.classList.remove("winner");
    gameOver = false;//restarts game
}