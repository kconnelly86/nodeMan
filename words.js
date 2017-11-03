// Array of words
var wordsJs = function() {

	var words = ["microsoft", "apple", "linux", "macintosh","hp"]; 

		var randomWord = words[Math.floor(Math.random() * words.length)]  
		//this logs the answer from the array
		console.log(randomWord);

			var blankArr = [];
			// for loop pushes blank space into empty array blankArr
			for (var i = 0; i < randomWord.length; i++) {
				blankArr.push("_");


			}// ends for loop
			// logs the actual blank array. 
			console.log(blankArr);

}//end of wordJs function
// exports the whole function to game.js
module.exports = wordsJs;