# liri-node-app

### The LIRI (Language Interpreation and Recognition Interface) App, similar to Apple's SIRI (Speech Interpretation and Recognition Interface), is a node-based CLI that takes direct user input and returns corresponding, relevant data. Please find the app's current capabilities below:
#### To input requests, please enter in the following format: node liri.js (command) (info). Please use quotation marks for the info request if it contains more than one word.

* **Bands in Town Concert Information:**  
Using the command "concert-this", users can return an Artist/Band's upcoming concerts (including dates, venues, and locations).

![Concert](https://github.com/Kaviz101586/liri-node-app/blob/master/assets/images/concert-this.PNG)

* **Song Information:**  
Using the command "spotify-this-song", users can return details on any song they wish including the Artist/Band's name, official song title, album name, and a link a short previuew of the song (should one be available).

![Spotify](https://github.com/Kaviz101586/liri-node-app/blob/master/assets/images/spotify-this-song.PNG)

* **Movie Information:**  
Using the command "movie-this", users will be able to find information on any movie of their choice. The app will show the movie's title, year it was released, its IMDB Rating, its Rotten Tomatoes Rating, where the film was produced, what language its in/available in, a short summary of the plot, and its cast

![Movie](https://github.com/Kaviz101586/liri-node-app/blob/master/assets/images/movie-this.PNG)

* **Do-What-It-Says:**  
Using the command "do-what-it-says", the app will run the "spotify-this-song" command, utilizing the "fs" node package to read instructions from an external file ("random.txt").
_Note: No info is required for the do-what-it-says command_

![DWIS](https://github.com/Kaviz101586/liri-node-app/blob/master/assets/images/do-what-it-says.PNG)


