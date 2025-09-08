const flattenArray = (nestedArrays) => {
	let result = [];
	for (const el of nestedArrays) {
		if (Array.isArray(el)) {
			result = result.concat(flattenArray(el));
		} else {
			result.push(el);
		}
	}

	return result;
};

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
