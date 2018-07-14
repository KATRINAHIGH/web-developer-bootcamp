var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function(){   //MANIPULATE
 if (isBlue) {
   body.style.background = "white";
 } else {
   body.style.background = "#3498db";
 }
 isBlue = !isBlue;
}, 1000);

var h1 = document.querySelector("h1");
h1.style.color = "pink";