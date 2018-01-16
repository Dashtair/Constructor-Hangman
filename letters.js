function Letter(value){
	this.value = value;
	this.show = false;
	if(this.value === ' '){
		this.show = true;
	};
}

Letter.prototype.showLetter = function() {
	if (this.show){
		return this.value;
	} else {
		return"_ ";
	};
}

module.exports = Letter;