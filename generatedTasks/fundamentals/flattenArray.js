const flat = (arr) => {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const currentElement = arr[i];

		if (Array.isArray(currentElement)) {
			result.push(...flat(currentElement));
		} else {
			result.push(currentElement);
		}
	}

	return result;
};

console.log(flat([1, [2, [3, 4], 5]]));
