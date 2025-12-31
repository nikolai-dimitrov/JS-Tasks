// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

const getConsonantSubstring = (word) => {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let vowels = "aeiou";

	let value = 0;
	let max = 0;

	for (let i = 0; i < word.length; i++) {
		let letter = word[i];
		if (vowels.includes(letter)) {
			value = 0;
		} else {
			value += alphabet.indexOf(letter) + 1;
			max = value > max ? value : max;
		}
	}
	return max;
};

console.log(getConsonantSubstring("zodiac"));
console.log(getConsonantSubstring("strength"));
