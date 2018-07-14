//Objects nested in an array, an array of posts, we have list and each item in that list
//is it's own object
var posts = [
    {
        title: "Cats are mediocre",
        author: "Colt",
        comments: ["awesome", "agreed"]  //array of comments, comments key and value array
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Luvr",
        comments: ["truth", "preech"] 
    }
]

var lengthOfArray = posts.length;
//Access first title
posts[0].title;
//Access second comment of second post
posts[1].comments[1];

var someObject = {};
//which of the following are valid?

someObject._name ="Hedwig";  //valid
someObject.age = 6; //valid

var prop = "color"  //valid
someObject[prop] = red; //valid, square brackets will evaluate prop and pass in color

//someObject.123 = true; //invalid


//Write Code to retrieve string Malfoy from someObject. Go one layer at a time
var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "Babyblue",
    isEvil: true
};

//first layer
someObject.friends
//second layer
someObject.friends[0]
//third layer
someObject.friends[0].name