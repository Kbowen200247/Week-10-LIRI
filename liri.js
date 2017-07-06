var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var keys = require("./keys.js");	
var fs = require("fs");


var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

function differentSwitch(){
	switch(firstCommand){

	case 'my-tweets':
		twitters();
		break;
	case 'spotify-this-song':
		spotifySong();
		break;
	case 'movie-this':
		movies();
		break;
	case 'do-what-it-says' :
		dowhatit();
	break;

	default:
		console.log("Type command: node liri.js " + "\n" + "my-tweets," + "\n" +  "spotify-this-song," + "\n" + "movie-this" + "\n" +  "do-what-it-says");
	}
}

function twitters(){

	var client = new twitter({
  		consumer_key: keys.twitterKeys.consumer_key,
  		consumer_secret: keys.twitterKeys.consumer_secret,
  		access_token_key: keys.twitterKeys.access_token_key,
  		access_token_secret: keys.twitterKeys.access_token_secret
	});

	var params = {screen_name: 'kbowen200247'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
  			var data = [];
  			console.log("\n---------- TWEET ME ----------\n");
  			for(i=0; i<tweets.length; i++){
  				data.push({
				"Numbers: " : (i+1),
				'Created_at: ' : tweets[i].created_at,
				"Tweets: " : tweets[i].text,
  				});
  				// console.log("--------------------");
  			}
  			console.log(data);
  			WriteText(data);
  		}
	});
}

function spotifySong(){
	console.log("\n-------- Spotify This --------");

	var searchTrack;
	if (secondCommand === undefined){
		searchTrack = "The Sign by Ace of Base";
	} else {
		searchTrack = secondCommand;
	}

	var params = searchTrack;
 
	spotify.search({ type: 'track', query: params }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
    	else {
	    	console.log("/////////searchTrack////////");
	    	console.log(params);  
	    	console.log("/////////Data.Tracks////////");
	    	console.log(data.search);
	    	// var artist = data.tracks.items[0].artists[0].name;
	    	// console.log("Artist: " + artist);
	    	// var songs = data.tracks.items[0].name;
	    	// console.log("Song: " + songs);
	    	// var album = data.tracks.items[0].album.name;
	    	// console.log("Album: " + album);
	    	// var preview = data.tracks.items[0].preview_url;
	    	// console.log("Preview Link: " + preview);
	    }
	});

};

function movies(){
	console.log("\n------ Movie and Netflix------\n");
	var movieName;
	var data = [];

	if (secondCommand === null){
		movieName = "Mr.Nobody";
		console.log("-----------------------");
      	console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      	console.log("It's on Netflix!");
	}
	else {
		movieName = secondCommand;
	};

	var url = "https://www.omdbapi.com/?t=" + movieName + "&type=movie&tomatoes=true";
	
	// console.log(url);

	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200){
			data.push({
				"Title: " : JSON.parse(body).Title,
				"Year: " : JSON.parse(body).Year,
				"Rating: " : JSON.parse(body).imdbRating,
				"Country of Production: " : JSON.parse(body).Country,
				"Language: " : JSON.parse(body).Language,
				"Plot: " : JSON.parse(body).Plot,
				"Actors: " : JSON.parse(body).Actors,
				"Rotten Tomatoes URL: " : JSON.parse(body).tomatoURL

			});
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("Rating: " + JSON.parse(body).imdbRating);
			console.log("Country of Production: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
		}
  		WriteText(data);
	});
};

function dowhatit() {
	var fs = require("fs");
	fs.readFile("random.txt", "utf8", function(err, data){
			var dowhatitsay = data.split(',');

			// console.log(dowhatitsay);

			firstCommand = dowhatitsay[0];
     		secondCommand = dowhatitsay[1];	
			
			if (secondCommand === 'movie-this'){
     			movies();
     		}
			differentSwitch();
    });

};

var WriteText = function(data){

	fs.appendFile("log.txt", '\r\n\r\n');

	fs.appendFile("log.txt", JSON.stringify(data), function(err){
		if (err){
			return console.log(err);
		}
		else {
			console.log("Update Complete with log.txt");
		}
	})

}

differentSwitch();
