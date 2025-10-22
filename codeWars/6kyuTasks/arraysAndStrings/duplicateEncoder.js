// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
const duplicateEncoder = (word) => {
	// Inline
	word = word
		.toLowerCase()
		.split("")
		.map((letter) =>
			word.indexOf(letter) == word.lastIndexOf(letter) ? "(" : ")"
		)
		.join("");

	// let result = "";

	// word.forEach((letter) => {
	// 	if (word.indexOf(letter) == word.lastIndexOf(letter)) {
	// 		result += "(";
	// 	} else [(result += ")")];
	// });

	return result;
};

duplicateEncoder("din");
duplicateEncoder("recede");
duplicateEncoder("Success");
duplicateEncoder("(( @");
