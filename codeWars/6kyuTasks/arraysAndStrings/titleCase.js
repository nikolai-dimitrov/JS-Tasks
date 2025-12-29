// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
const titleCase = (title, minorWords = "") => {
	const minorWordsArray = minorWords.split(" ").map((el) => el.toLowerCase());
	const titleArray = title.split(" ");
	const result = [];

	titleArray.forEach((word, index) => {
		if (minorWordsArray.includes(word.toLowerCase()) && index != 0) {
			result.push(word.toLowerCase());
		} else {
			const titleCaseWord =
				word.slice(0, 1).toUpperCase() +
				word.slice(1, word.length).toLowerCase();
			result.push(titleCaseWord);
		}
	});

	return result.join(" ");
};

titleCase("");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
