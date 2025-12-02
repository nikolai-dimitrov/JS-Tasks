const removeOccurrences = (arr, n) => {
	const occurrencesCounter = {};
	const result = [];

	arr.forEach((el) => {
		if (occurrencesCounter[el] == undefined) {
			occurrencesCounter[el] = n - 1;
			result.push(el);
		} else {
			if (occurrencesCounter[el] > 0) {
				occurrencesCounter[el] -= 1;
				result.push(el);
			}
		}
	});

	return result;
};

removeOccurrences([20, 37, 20, 21], 1);
removeOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
removeOccurrences([12, 39, 19, 39, 39, 19, 12], 1);
