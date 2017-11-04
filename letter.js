//Letter.js Should control whether or not a letter appears as a "_" or as itself on-screen.
function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display2 = function(){
		if (this.found) { 
			return " " + this.letter + " "
		}else { return ' _ ' };
	}

}

module.exports = Letter;