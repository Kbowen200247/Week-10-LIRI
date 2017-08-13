#Week-10-liri

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command #line node app that takes in parameters and gives you back data.

#Before You Begin

1. LIRI will display your latest tweets. As we do not want to display your personal account, or its keys, please make an alias account and add a few tweets to it!
2. Make a new GitHub repository called liri-node-app and clone it to your computer.
3. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. You'll find these Node packages crucial for your assignment.
	* Twitter
	* Spotify
	* Request
		- You'll use Request to grab data from the OMDB API.

#What Each Command Should Do
	1. node liri.js my-tweets
		* This will show your last 20 tweets and when they were created at in your terminal/bash window.

<img width="800" height="500" alt="mytweets" src="https://kbowen200247.github.io/week-10-liri/images/my-tweets.png">

2. node liri.js spotify-this-song '<song name here>' (Not Working)
		* This will show the following information about the song in your terminal/bash window
			- Artist(s)
			- The song's name
			- A preview link of the song from Spotify
			- The album that the song is from
		* if no song is provided then your program will default to
			- "The Sign" by Ace of Base

	3. node liri.js movie-this '<movie name here>'
		* This will output the following information to your terminal/bash window:
			- Title of the movie.
   			- Year the movie came out.
   			- IMDB Rating of the movie.
   			- Country where the movie was produced.
   			- Language of the movie.
   			- Plot of the movie.
   			- Actors in the movie.
   			- Rotten Tomatoes URL.
   		* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
			- If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
			- It's on Netflix!


<img width="800" height="500" alt="Movie-This" src="https://kbowen200247.github.io/week-10-liri/images/movie-this.png">

	4. node liri.js do-what-it-says
		* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
			- It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
			- Feel free to change the text in that document to test out the feature for other commands.

<img width="800" height="500" alt="do-what-it-says" src="https://kbowen200247.github.io/week-10-liri/images/do_what_it_says.png">

## BONUS
	* In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
	* Make sure you append each command you run to the log.txt file. 
	* Do not overwrite your file each time you run a command.

<img width="800" height="500" alt="bonus" src="https://kbowen200247.github.io/week-10-liri/images/log_txt.png">
