var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("bolded");
console.log("Should return list with elements of class name bolded");
console.log(tags);
console.log("Should return element at index 0");
console.log(tags[0]); //valid
console.log("Should return length of node list array for elements with class name bolded");
console.log(tags.length); //valid
//console.log(tags.foreach()); Not valid can't iterate over a node list

var tags2 = document.getElementsByTagName("li");
console.log("Should return a node list with elements of tag name li");
console.log(tags2);
console.log("Should return element with tagname at index 0");
console.log(tags2[0]);
console.log("Should return length of node list array for elements with tagNam li");
console.log(tags2.length);

var tagId = document.querySelector("#highlight");//use css syntax to grab id
var tagClass = document.querySelector(".bolded");//use css syntax to grab class
var tagName = document.querySelector("h1");//the tags are selectors and in css format, use like normal
//var tagNested = document.querySelector("li a.special");//can select nested elements using css syntax

var tagsName = document.querySelectorAll("h1"); //returns a list of h1
var tagsclass = document.querySelectoryAll(".bolded"); //returns a list of .bolded class items