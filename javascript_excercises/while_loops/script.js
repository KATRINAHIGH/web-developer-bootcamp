//Print all numbers between -10 and 19.
var count = -10;
while(count < 20){
    console.log("Print this number: " + count);
    count++;
}
//Print all even numbers between 10 and 40.
var evenCount = 10;
while(evenCount <= 40){
    console.log("This is an even num: " + evenCount);
    evenCount += 2;

}
//Print all odd numbers between 300 and 333.
var oddCount = 300;
while(oddCount <= 333){
    oddCount++;
    if(oddCount % 2 !== 0){
        console.log("Print odd number: " + oddCount);
    }
    oddCount++;
}
//Print all numbers divisible by 5 and 3 between 5 and 50.
var divCount = 5;
while(divCount <= 50){
    if((divCount % 5 === 0) || (divCount % 3 === 0)){
    console.log("Print divisible by 3 or 5: " + divCount);
    }
    divCount++;
}




