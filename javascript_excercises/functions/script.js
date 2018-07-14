/**
 * Write a function isEven() which takes a single numeric
    argument and returns true if the number is even, and false otherwise.
    ex: isEven(4); //true, 
 */
function isEven(num){
    return  num % 2 === 0;
}
isEven(4);
isEven(5);


 /**
  * Write a function factorial() which takes a single numerica argument
    and returns the factorial of that number. ex: factorial(5)//120 
  */

  function factorial(num){
    var result = 1;  
    for( i = 2; i <= num; i++){
        result *= i;
    }
    return result;
  }

  /**
   * Write a function kebabToSnake() which takes a single kebab-cased string 
   * argument and returns the snake_cased version. replace "-" with "_"
   * ex kebabToSnake("hello-world") //hello_world
   */

   function kebabToSnake(str){
       var result = str.replace(/-/g, "_");
       return result;
   }
   