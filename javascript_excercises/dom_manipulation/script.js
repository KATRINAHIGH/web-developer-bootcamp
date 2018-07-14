
/**Changing styles as little as possible inside javascript. Use javascript to turn on a
 * and of css styles using classes */
/**Changing an element's style: The style property is one way to manipulate an 
 * elements style. when the DOM is constructed and an individual node or object is made
 * for every single element. There's a property called style. The style property is a 
 * huge object. Hundreds of properties. 
 * Important to note that the right side must be a string
 * If we want styles this way when page opens then no need for javascript. But if we wanted
 * to change colors after five seconds, or when a user scrolled...
 * */
//this is not dry code. must be a better way?
var tag6 = document.getElementById("highlight");
tag6.style.color = "blue";
tag6.style.border = "10px solid red";
tag6.style.fontsize = "70px";
tag6.style.background = "yellow";
tag6.style.marginTop = "200px";

//classList = adding/removing classes

//textContent and innerHTML = changing the content of a tag

//getAtrribute and setAtrribute = changing attributes(src, href, etc)


/**Is this a Bad Idea?
 * It is recommended for styles to be defined in a separate file or files.
 * The style property allows for quick styling, for example for testing purpsoses. MDN
 * Separation of Concerns: 
 * 1. Structure-HTML 2. Behavior-JS 3.Presentation-CSS
 * 
 * An Alternative
 * Rather than directly manipulating style with JS, we can define a CSS class
 * and then toggle it on or off with JS
 */
 //INSTEAD OF THIS:
var tag7 = document.getElementById("highlight2");
tag7.style.color = "blue";
tag7.style.border = "10px solid red";

/**DEFINE A CLASS IN CSS
.some-class {
    color: blue;
    border: 10px solid red;
  }*/

var tag8 = document.getElementById("highlight3");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT, will apply all styles 
//in some-class to highlight id
tag8.classList.add("some-class");

 /**classList
  A read-only list that contains the classes for a given element. It is not an array */
  /*DEFINE A CLASS IN CSS*/
  /**.another-class {
    color: purple;
    fontSize: 76px;
  }*/

//ADD A CLASS TO THE SELECTED ELEMENT, give a class to the selected element, applies 
//all properties in the class to the chosen element
var tag1 = document.querySelector("h1");
tag1.classList.add("another-class");

var tag11 = document.querySelector("#last");
tag11.classList.add("big");

//REMOVE A CLASS, removes class name from class list
var tag2 = document.querySelector("h2");
tag2.classList.remove("another-class");

//TOGGLE A CLASS, it takes a class name and if the given element has that class 
//already, it will then remove it. If the element doesn't have that class then it 
// turn it on
var tag3 = document.querySelector("h3");
tag3.classList.toggle("another-class");

/**textContent
 * Returns a string of all the text contained in a given element, does not include tags 
 * that are in the sentence or paragraph. We can also alter the text content by setting 
 * it using the = asignment operator. Warning, text content will over write whatever is 
 * in between the tags. So if you have a strong tag it will no longer exist.
 * If want to preserve html elements do not use textContent to set text.
 *<p>This is an <strong>awesome</strong> paragraph </p>
 */

//Select the first <p> tag:
var tag4 = document.querySelector("p");
//Retrieve the textContent:
tag4.textContent //"This is an awesome paragraph"
//alter the textContent:
tag4.classList.add("big");
tag4.textContent = "blah blah blah";

//Can chain the selector and manipulator
document.querySelector("h1").textContent = "End of this Lesson";

/**
 * innerHTML
 * similar to textContent, except it returns a string of all the HTML contained in a
 * given element. So this works like textContent but keeps the html elements in tack
 * Maintains the structure with the correct html elements
 * <p>This is an <strong>awesome</strong> paragraph</p>
 */

 //Select the <p> tag:
var tag5 = document.querySelectorAll("p")[1];
tag5.innerHTML
//"This is an <strong>awesome</strong> paragraph"

//Another difference between the innerHTML and textContent is that the innerHTML will
//render the html passed in
//document.body.textContent;
//document.body.textContent= "<h1>Goodbye!</h1>";//this will not render
//versus
//document.body.innerHTML = "<h1>Goodbye!</h1>";//this will render




/**
 * Attributes
 * Use getAtrribute() and setAttribute() to read and write attributes like src or href
 * <a href="www.google.com">I am a link</a>
    <img src="logo.png">
    Works on any attribute!!
 */

var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","https://www.google.com"); //takes 2 arguments, name of attribute and what you want to set it to
///<a href="www.dogs.com">I am a link</a> //needs absolute path, relative path wont work
link.textContent = "Link to Google";
//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg");
//<img src="corgi.png">