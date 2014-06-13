describe('pigLatin', function () {
	it('adds "ay" to the end of words that start with a vowel', function () {
		pigLatin("ear").should.equal("earay");
	});
	it('moves consecutive initial consonants at the beginning of a word and adds "ay"', function () {
		pigLatin('spear').should.equal('earspay');
	});
	it('moves an initial q with a u after to the end of the word, even though the u is a vowel, and adds "ay"', function () {
		pigLatin('queer').should.equal('eerquay');
	});
	it('moves an initia "consonants + qu" to the end of the word, and adds "ay"', function () {
		pigLatin('squeal').should.equal('ealsquay');
	});
	it('treats an initial "y" like a consonant', function() {
		pigLatin('year').should.equal('earyay');
	});
	it('transforms every word in a sentence', function() {
		pigLatin('happy new year').should.equal('appyhay ewnay earyay');
	});
});

