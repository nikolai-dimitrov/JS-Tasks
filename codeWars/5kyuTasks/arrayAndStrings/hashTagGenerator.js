// It must start with a hashtag (#).
// All words must have their first letter capitalized, and remaining letters lowercased.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

const generateHashtag = (str) => {
	const splittedStr = str
		.trim()
		.split(" ")
		.filter((el) => el != "");
	if (splittedStr.length == 0) {
		return false;
	}

	let capitalizedWords = splittedStr.map((word, index) => {
		const firstLetter = word[0].toUpperCase();
		const rest = word.slice(1, word.length);

		return `${firstLetter}${rest}`;
	});
	capitalizedWords.unshift("#");

	const resultString = capitalizedWords.join("");

	return resultString.length > 140 ? false : resultString;
};

generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag("    Hello     World   ");
generateHashtag("aaaaaaaaaaa");
generateHashtag("Codewars Is Nice");
console.log(generateHashtag(""));
console.log(generateHashtag("a".repeat(140)));
