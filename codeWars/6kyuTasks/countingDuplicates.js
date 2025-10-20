// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
const duplicatesCount = (text) => {
	const charsMap = {};
	text = text.toLowerCase().split("");
	text.forEach((el) => {
		filteredChars = text.filter((char) => char == el);
		charsMap[el] = filteredChars.length;
	});

	return Object.entries(charsMap).filter(([key, value]) => value > 1).length;
};

duplicatesCount("aabbcde");
duplicatesCount("Indivisibilities");
duplicatesCount("Indivisibility");
duplicatesCount("abcde");
duplicatesCount("");
