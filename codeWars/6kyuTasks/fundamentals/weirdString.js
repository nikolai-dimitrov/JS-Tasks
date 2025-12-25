// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
const transformString = (str) => {
	let result = "";
	str.split(" ").forEach((word) => {
		let i = 0;
		while (i < word.length) {
			const currentChar = word[i];

			i % 2 == 0
				? (result += currentChar.toUpperCase())
				: (result += currentChar.toLowerCase());
			i += 1;
		}
		result += " ";
	});

	return result.trim();
};

transformString("String");
transformString("Weird string case");
transformString("UPPER CASE");
