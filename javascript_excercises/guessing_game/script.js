var num = 5;
var guessNum = Number(prompt("Guess a number."));

//if guessed correct
if(num === guessNum){
    console.log("Congrats! You guessed the number.");
}else if(guessNum > num){
    console.log("Sorry number is too high.");
}else{
    console.log("Sorry number is too low")
}


