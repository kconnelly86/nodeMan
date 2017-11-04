//Your game.js file will randomly select a word for the player.
var inquirer = require("inquirer");
var Word = require('./word.js');

var words = ["microsoft", "apple", "linux", "macintosh","hp"]; 
var randomWord = words[Math.floor(Math.random() * words.length)]  
var wordObject = new Word(randomWord);

wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display1());
console.log(randomWord)
function askLetter() {
inquirer.prompt([{
		type: 'input',
		name: 'guess',
		message: 'What\'s your guess'
		//the .then is the promise
	}]).then(function (answers) {
		console.log('you guessed ', answers.guess)
		wordObject.updateLetter(answers.guess)
		console.log(wordObject.display1())
		askLetter()

		// Use user feedback for... whatever!!
	});
}
askLetter()
// randomWord();
// console.log(randomWord);



