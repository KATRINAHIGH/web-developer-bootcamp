var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(){
    console.log("Inside The Foreach");
});

colors.forEach(function(){
    alert("Inside the foreach");
});

//in order to implement function on each element must pass in argument.
//It doesn't matter what you name it
//iLoveDogs is holding the value of each item in the array as the forEach loops through
colors.forEach(function(iLoveDogs) {
    console.log("Inside the forEach" + iLoveDogs);
});


//create a function
function printColor(color){
    console.log("************");
    console.log(color);
    console.log("************");

}

//now can pass that function into forEach syntax
colors.forEach(printColor);
//important note don't put () after function here. If we do we will immediately call that
//function. Whenever javascript sees a function followed by parenthesis it will execute it.
//So it doesn't matter we are passing it into forEach, it will be called before we want to 
//call it.
colors.forEach(printColor()); //Don't do!!
/**Whats happening behind the scenes is forEach is taking the function and applying it 
 * to each element in the array.
 */