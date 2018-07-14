// the scope is by default global
var name = 'Hammad';


//Variables inside the Global scope can be accessed and altered in any other scope.
console.log(name); // logs 'Hammad'

function logName() {
    console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs 'Hammad'

/********************Local Scope**************** */
/**Local scope Variables defined inside a function are in the local scope. And they 
 * have a different scope for every call of that function. This means that variables 
 * having the same name can be used in different functions. This is because those 
 * variables are bound to their respective functions, each having different scopes, 
 * and are not accessible in other functions. */

 // Global Scope
function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope
function anotherFunction() {
    // Local Scope #3
}
// Global Scope


/********************Block Statements********************* */
//Block statements like if and switch conditions or for and while loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

if (true) {
    // this 'if' conditional block doesn't create a new scope
    var name = 'Hammad'; // name is still in the global scope
}

console.log(name); // logs 'Hammad'

//Read more here https://scotch.io/tutorials/understanding-scope-in-javascript