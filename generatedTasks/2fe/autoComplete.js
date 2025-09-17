const words = ["apple", "banana", "grape", "orange", "pear"];

const search = (searchTerm) => {
	const result = [];

	words.forEach((word) => {
		if (word.includes(searchTerm) && word.indexOf(searchTerm) == 0) {
			result.push(word);
		}
	});

	console.log(result);
	return result;
};

search("ap");
search("b");
search("z");
