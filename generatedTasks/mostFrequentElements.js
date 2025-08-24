const mostFrequentElements = (arr, n) => {
	const mostFrequent = {};

	arr.forEach((element) => {
		if (!mostFrequent[element]) {
			mostFrequent[element] = 0;
		}

		mostFrequent[element] += 1;
	});

	const sortedMostFrequent = Object.entries(mostFrequent)
		.sort((a, b) => b[1] - a[1])
		.slice(0, n)
		.map((currentElement) => currentElement[0]);

	console.log(sortedMostFrequent);
};

mostFrequentElements([1, 2, 2, 3, 1, 2, 4], 2);
mostFrequentElements(["a", "b", "a", "c", "b", "a"], 1);
