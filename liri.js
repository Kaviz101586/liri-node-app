require("dotenv").config();

// var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
// var fs = require("fs");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var info = process.argv[3];

if (command ==="concert-this") {
    var output = []
    axios.get("https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp")
    .then(function(response) {
        if (response.data.length === 0) {
            console.log("No upcoming events");
        }

        else {
            for (var i = 0; i < 7; i++)
                request = ("======================="+"\n"+"Venue: "+response.data[i].venue.name+"\n"+"In: "+response.data[i].venue.city+", "+response.data[i].venue.region+"\n"+"At: "+moment(response.data[i].datetime).format('MM-DD-YYYY')+"\n"+"=======================")
                output.push(request);
                console.log(request);
        }
    });
};

// if (command ==="spotify-this-song") {

// };

// if (command ==="movie-this") {

// };

// if (command ==="do-what-it-says") {

// };