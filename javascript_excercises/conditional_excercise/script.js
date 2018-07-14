var age = Number(prompt("What is your age"));

/** Instructor example
if(age < 18){
    console.log("You can not enter the bar.");
}else if (age < 21){
    console.log("You may enter the bar but you can not drink.");
}else {
    console.log("You may drink.");
}*/

// Get age and convert it to a Number (prompt always returns a String)
if(age < 0){
    console.log("Your age can't be a negative number.");
}
// If age is negative
if(age === 21){
    console.log("Happy 21st Birthday");
   
}
//if age is odd not evenly divisible by 2
if(age % 2 > 0){
    console.log("Your age is odd.")
}
//if age is a perfect square
if(age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square");
}

 
      