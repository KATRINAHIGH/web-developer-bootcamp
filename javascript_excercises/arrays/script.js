//Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

//Add to the end of an Array
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

//Remove from the end of an Array
var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

//Remove from the front of an Array
var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

//Add to the front of an Array
var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

//Find the index of an item in the Array
fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]
var pos = fruits.indexOf('Banana');
// 1

//Remove an item by index position
var removedItem = fruits.splice(pos, 1); // this is how to remove an item                                       
// ["Strawberry", "Mango"]

//Remove items from an index position
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]



//Copy an Array
var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]