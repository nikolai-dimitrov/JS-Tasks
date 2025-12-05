const sumArrays = (arr) => {
	let result = 0;

	for (const element of arr) {
		if (Array.isArray(element)) {
			result += sumArrays(element);
		} else {
			result += element;
		}
	}

	return result;
};

sumArrays([1, [2, 3], 4]);
