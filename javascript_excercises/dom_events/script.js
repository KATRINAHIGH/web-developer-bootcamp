//Use a method called addEventListener to add a listener
//element.addEventListener(type, functionToCall);

//select your element
var button = document.querySelector("button");
//manipulate your element, use anonymous function and then act on element
button.addEventListener("click", function(){
    console.log("Someone clicked the button!");
});

//can have more than one element changed by an event
var button2 = document.getElementById("secondExample");
var p = document.getElementById("pExample");
var body = document.querySelector("body");
button2.addEventListener("click", function(){
    p.textContent = "SOMEONE CLICKED THE BUTTON";
    body.style.backgroundColor = "green";
});

//What happens when set it on a parent element, the parent element is the container,
//everything inside that will respond to the event listener
var ul = document.querySelector("#parentExample");
ul.addEventListener("click", function(){
    console.log("You clicked on the ul");
});
//What if I wanted to only target the first li
//We could an event listener to each li using a for loop
//can use this keyword instead of lis[i] it will refer to the element that was clicked
var lis = document.querySelectorAll("li");
for( var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "red";
    });
}


//We could also rewrite it using a named function instead of an anonyomous function
var lastButton = document.querySelector("#namedFunction");
var paragraph = document.querySelectorAll("p");

lastButton.addEventListener("click", changeParagraph);

function changeParagraph(){
    paragraph.style.color = "orange";
}