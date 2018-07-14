//mouseOver triggers when hover starts over element, not constantly firing, only
//when hover first begins, also changes on hover but when move mouse away it does not
//change back to black. So we have to use mouseout

/** This works for the first li tag but we want it for all lis
var firstLi = document.querySelector("li");

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout", function(){
    firstLi.style.color = "black";
});*/

var lis = document.querySelectorAll("li");
/** 
for(var i = 0; i<lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.style.color = "green";
    });

    lis[i].addEventListener("mouseout", function(){
        this.style.color = "black";
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}*/

//refactored to improve separation of concerns, styling in css and javascript adding or removing class
for(var i = 0; i<lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });

    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
