//add a function as a property to an object
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}

//Now to call add can't just write add() we have to
obj.add(10, 15);
//console.log() works the same way. Console is an object and .log() is a method called on that object
//Why do we want to add methods to our objects versus defining them separately?
//First helps keep code organized and group things logically together
//Second a way to avoid namespace collisions

//NameSpace Collision
function speak(){
    return "Woof";
}

function speak(){
    return "Meow"
}

//will return meow and no way to access the first speak function
var dogSpace = {};
dogSpace.speak = function(){
    return "WOOF!";
}

var catSpace = {};
catSpace.speak = function(){
    return "Meow";
}

dogSpace.speak();
catSpace.speak();

//This keyword
var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

//this function is not a method, putting function in global namespace
function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}

print(comments.data);

//creating a method, add function to object as a property
//this refers to the object comments
comments.print = function (){
    this.data.forEach(function(el){
        console.log(el);
    });
}

//to use
comments.print();

//common way to organize code
//take data put it inside an object
//take associated functions and add as methods to the same object
//use the keyword this to access the data we predefined