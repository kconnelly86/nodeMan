//this file should contain all of the methods which will check the letters guessed vs the random work selected
var Letter = require('./letter.js');

function Word(word){

	this.word = word //this is the word to be guessed
	this.letters = []; //this the word broken down into letters
    
    this.makeAndPushLettersIntoWord = function(){
        for (var i=0; i< this.word.length; i++){
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
    this.display1 = function(){
    	var blankArr = "";
			// for loop pushes blank space into empty array blankArr
			for (var i = 0; i < this.letters.length; i++) {
				//blankArr.push("_");
				blankArr += this.letters[i].display2();
			}// ends for loop

			return blankArr;
			// logs the actual blank array. 
			console.log(blankArr);
    },
//method
	this.updateLetter = function(guess){
		//chack all of the letter objects and see if the guess matches
		//if it does update that letter's found to true 
		for (var i = 0; i < this.letters.length; i++) {
			if(guess == this.letters[i].letter) this.letters[i].found = true;

		}
	} // 

} // end of constructor function

module.exports = Word;