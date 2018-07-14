var but = document.querySelector("button");
/**var isPurple = false;

but.addEventListener("click", function(){
    if(isPurple){  
        document.body.style.background = "white"; 
        isPurple = false;
    } else{
         document.body.style.background = "purple"; 
        isPurple = true; 
    } 
});*/

//Shortcut we could remove both isPurple from ifelse statements and move outside of it
/**
 * but.addEventListener("click", function(){
    if(isPurple){  
        document.body.style.background = "white"; 
    } else{
         document.body.style.background = "purple"; 
    } 
    isPurple = !isPurple;
});
 */

 ///We could use toggle with classList to make it even shorter
 //toggle will check to see if body has class name purple if it doesnt it will add it
 //if it does have the class name purple it will remove it
  but.addEventListener("click", function(){
  document.body.classList.toggle("purple");
   });
 