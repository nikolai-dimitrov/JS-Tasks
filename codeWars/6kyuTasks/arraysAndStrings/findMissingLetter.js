// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
const findMissingLetter = (array) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let prevLetterIndex = null;
	let missingLetterIndex = null;
	let isLowerCase = true;
	array.forEach((letter, index) => {
		if (letter == letter.toUpperCase()) {
			isLowerCase = false;
		}

		letter = letter.toLowerCase();

		if (prevLetterIndex != null) {
			if (!(prevLetterIndex + 1 == alphabet.indexOf(letter))) {
				missingLetterIndex = prevLetterIndex + 1;
			}
		}

		prevLetterIndex = alphabet.indexOf(letter);
	});

	return isLowerCase
		? alphabet[missingLetterIndex]
		: alphabet[missingLetterIndex].toUpperCase();
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
console.log(findMissingLetter(["a", "c"]));
