/**Write a printReverse() that takes an array as an argument
and prints out the elements in the array in reverse order(don't 
actually reverse the array itself) ex: printRevers([1,2,3,4]); 4/n3/n2/n1*/

function printReverse(arr){
    for(i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

/**write a function isUniform() which takes an array as an argument and 
returns true if all elements in the array are identical. 
ex: isUniform([1,1,1,1]); //true*/
/**function isUniform(arr){
    arr.forEach(function(num){
        if(arr[0] !== num){
            return false;
        }
        return true;
    });
} *///Note this doesn't work. If return false will break out of first function and 
//and then complete the next line of the outside function which returns true.

function isUniform(arr){
    var first = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

/**write a function sumArray() that accepts an array of numbers and returns
 the sum of all numbers in the array. ex: sumArray([1,2,3];) //6*/
 function sumArray(arr){
     var result = 0;
     arr.forEach(function(num){
        result += num;
     });
     return result;
 }

/** write a function max() that accepts an array of numbers and returns the 
maximum in the array. ex: max([1,2,3]); //3*/
function max(arr){
    var largest = 0;
    arr.forEach(function(num){
        if(num > largest){
            largest = num;
        }
    });
    return largest;
}
           