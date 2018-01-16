var randomWord = function() {
	var words = ["cleveland", "kazakhstan", "turkey", "sheep", "knight", "london"];
	var wordIndex = Math.floor(Math.random() * words.length);
	return words[wordIndex];
};

module.exports = randomWord;