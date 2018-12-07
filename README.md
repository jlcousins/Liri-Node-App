# Liri-Node-App

The assignment doesn’t have an HTML page, so I’ve used screen captures below to explain how it works. Liri has 4 commands:

concert-this uses the Bands in Town database to create a function – concertThis – that pulls fthe user-specified artist.

spotify-this-song uses the Spotify NPM to create a function – spotifyThisSong – to pull specific information from the returned object based on the song the user asks for.

movie-this uses the Request NPM to pull specific data from the OMDB database for the user-specified movie.

The do-what-it-says command uses fs.write to write to the random.txt file in my directory.

Technology used This app uses JavaScript, Node.js and 4 NPM packages: Axios, Dotenv, Moment, and Node-Spotify-API


I coded a switch with “cases” and corresponding functions to create the four separate commands:

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

Video of app:
https://drive.google.com/file/d/1znBrvKmTsHFQ9dljFCuVmPx8QW8ryWfZ/view