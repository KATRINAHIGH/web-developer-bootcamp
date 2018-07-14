function sing(){
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

/**set interval takes 2 arguments the first is another function
 * the second argument is the interval in milliseconds. 
 * Why don't we need parathensis after sing? Because we are not the one
 * calling it. We don't want to execute it. We want to let setInterval excecute
 * it.
 */

 setInterval(sing, 1000);
 clearInterval(2); //will get this num when running code directly in console. will halt setInterval

 /**Sometimes we want to run the code but don't want to define the function ahead of time.
  * You can do that with an anonymous function. Write function keyword but don't give it a name.
  * Write code in curly braces.Defining function inline and cant call outside of setInterval.
  * Purely a way to pass a group of code into set interval.
  */
 setInterval(function(){
     console.log("I am an anonymous function");
 }, 2000);
 clearInterval(24); //will get this number when running code directly in console. 