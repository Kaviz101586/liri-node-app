require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var info = process.argv[3];

switch (command) {

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
}

function concertThis() {
    var output = []
    var max = 7
    axios.get("https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp")
    .then(function(response) {
        if (response.data.length === 0) {
            console.log("No upcoming events");
        }

        else if (response.data.length === 7) {
            for (var i = 0; i < 7; i++)
                request = ("======================="+"\n"+"Venue: "+response.data[i].venue.name+"\n"+"In: "+response.data[i].venue.city+", "+response.data[i].venue.region+"\n"+"At: "+moment(response.data[i].datetime).format('MM-DD-YYYY')+"\n"+"=======================")
                output.push(request);
                console.log(request);
        }

        else {
            for (var i = 0; i < max; i++)
            request = ("======================="+"\n"+"Venue: "+response.data[i].venue.name+"\n"+"In: "+response.data[i].venue.city+", "+response.data[i].venue.region+"\n"+"At: "+moment(response.data[i].datetime).format('MM-DD-YYYY')+"\n"+"=======================")
                output.push(request);
                console.log(request);
        }
    });
};

function spotifyThisSong() {
    if (info === undefined) {
        info = "the sign ace of base"
    }

    spotify.search(
        {
            type: "track",
            query: info
        },
        function(err,data) {
            if (err) {
                console.log("issue - check");
            }

            else {
                console.log("======================="+"\n"+"Artist: "+ data.tracks.items[0].album.artists[0].name + "\n"+"Song: " + data.tracks.items[0].name + "\n" + "Album: "+ data.tracks.items[0].album.name + "\n" + "Link: " + data.tracks.items[0].album.external_urls.spotify + "\n" + "=======================")
            }
        }
)}

function movieThis() {
    if (info === undefined) {
        info = "Mr. Nobody"
    }

    axios.get("https://www.omdbapi.com/?apikey=trilogy&t=" + info)
    .then(function(response) {
        var output = "Title: " + response.data.Title + "\n" + "Year: " + response.data.Year + "\n" + "IMDB Rating: " + response.data.imdbRating + "\n" + "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n" + "Country Produced: " + response.data.Country + "\n" +"Language: " + response.data.Language + "\n" + "Plot: " + response.data.Plot + "\n" + "Actors: " + response.data.Actors
        console.log(output);
    })

};

function doWhatItSays() {
if (command ==="do-what-it-says") {
    fs.readFile("random.txt","utf8", function (err,data) {
        if (err) {
            console.log("issue - check");
        }
        else {
            inxArray = data.split(",");
            command = inxArray[0];
            info = inxArray[1];
            spotifyThisSong(info);
        }
    })
}};