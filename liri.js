require("dotenv").config();

var keys = require("./keys.js")
var request = require("request");
var axios = require("axios");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var moment = require("moment");
moment().format();

var fs = require("fs");

var movieName = process.argv[3];
var liriReturn = process.argv[2];


// Make it so liri.js can take in one of the following commands:

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

switch (liriReturn) {
    case "concert-this":
    concertThis();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;
    case "do-what-it-says":
    doWhatItSays();
    break;

    default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
    "concert-this" + "\n" +
    "spotify-this-song 'any song title' " + "\n" +
    "movie-this 'any movie title' " + "\n" +
    "do-what-it-says " + "\n")

}

//COMMAND 1 CONCERT THIS
function concertThis(){
    var bandSearch = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(bandSearch, function(error, response, body){
        console.log(JSON.parse(body))

        request(bandSearch, function (error, response, body) {
            if (error) console.log(error);
            var result  =  JSON.parse(body)[0];
            console.log("Venue name " + result.venue.name);
            console.log("Venue location " + result.venue.city);
            console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
    
        });
    })
}

//COMMAND 2 SPOTIFY THIS SONG
function spotifyThisSong(trackName) {
    var trackName = process.argv[3];
    if (!trackName) {
        trackName = "Human Nature";
    };
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    },
        function (err, data) {
            if (!err) {
                var trackInfo = data.tracks.items;
                for (var i = 0; i < 5; i++) {
                    if (trackInfo[i] != undefined) {
                        var spotifyResults =
                            "Artist: " + trackInfo[i].artists[0].name + "\n" +
                            "Song: " + trackInfo[i].name + "\n" +
                            "Preview URL: " + trackInfo[i].preview_url + "\n" +
                            "Album: " + trackInfo[i].album.name + "\n"

                        console.log(spotifyResults);
                        console.log(' ');
                    };
                };
            } else {
                console.log("error: " + err);
                return;
            };
        });
};

//COMMAND 3 MOVIE THIS
function movieThis() {


    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {

        
        if (!error && response.statusCode === 200) {

            
            var myMovieData = JSON.parse(body);
            var queryUrlResults =
                "Title: " + myMovieData.Title + "\n" +
                "Year: " + myMovieData.Year + "\n" +
                "IMDB Rating: " + myMovieData.Ratings[0].Value + "\n" +
                "Rotten Tomatoes Rating: " + myMovieData.Ratings[1].Value + "\n" +
                "Origin Country: " + myMovieData.Country + "\n" +
                "Language: " + myMovieData.Language + "\n" +
                "Plot: " + myMovieData.Plot + "\n" +
                "Actors: " + myMovieData.Actors + "\n"

            console.log(queryUrlResults);
        } else {
            console.log("error: " + err);
            return;
        };
    });
};


//COMMAND 4 DO WHAT IT SAYS
function doWhatItSays() {

    fs.writeFile("random.txt", 'spotify-this-song,"Human Nature"', function (err) {
        var song = "spotify-this-song 'Human Nature'"
    
        if (err) {
            return console.log(err);
        };

        console.log(song);
    });
};
