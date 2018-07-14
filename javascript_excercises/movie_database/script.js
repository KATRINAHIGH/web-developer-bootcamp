//Create an array of movie objects. Each movie should have a title rating, and 
//hasWatched properties.

var movie = [
    {
    title: "First Movie",
    rating: "5 stars",
    hasWatched: true
    },
    {
    title: "Second Movie",
    rating: "3 stars",
    hasWatched: false
    },
    {
    title: "Third Movie",
    rating: "2 stars",
    hasWatched: true
    }
]

for(i=0; i < movie.length; i++){
    if(movie[i].hasWatched === true){
        console.log("You have watched " + movie[i].title + " - " + movie[i].rating);
    }else{
        console.log("You have not watched " + movie[i].title + " - " + movie[i].rating);
    }
}

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched";
    }else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
})

function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched";
    }else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});