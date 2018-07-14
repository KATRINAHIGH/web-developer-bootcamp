//Come up with 4 different ways to select the first <p> tag

//Should return element by unique id
var tagId = document.getElementById("first");
console.log(tagId);
//Should return list of elements by class name and use index to pull first class name special
//which happens to be a p tag
var tagClass = document.getElementsByClassName("special");
console.log(tagClass[0]);
//Should return list of elements by tagNam and use index to pull the first p tag
var tagName = document.getElementsByTagName("p");
console.log(tagName[0]);
//Should return first item found with id first which happens to be the first p tag
var queryId = document.querySelector("#first");
console.log(queryId);
//Should return first item found with class special which happens to be the first p tag
var queryClass = document.querySelector(".special");
console.log(queryClass);
//Should return first p tag
var queryName = document.querySelector("p");
console.log(queryName);
//Should return list of all elements with id of first and the one we want is at first index
var queryAllId = document.querySelectorAll("#first")[0];
console.log(queryAllId);
//Should return list of all elements with class of special and we want index 0
var queryAllClass = document.querySelectorAll(".special")[0];
console.log(queryAllClass);
//Should return list of all elements with p tag and we want the one at 0 index
var queryAllName = document.querySelectorAll("p")[0];
console.log(queryAllName);

var queryAdjacent = document.querySelector("h1 + p");
console.log(queryAdjacent);