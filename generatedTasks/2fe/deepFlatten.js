const deepFlatten = (arr) => {
	let result = [];
	for (const el of arr) {
		if (Array.isArray(el)) {
			result = result.concat(deepFlatten(el));
		} else {
			result = result.concat(el);
		}
	}

	return result;
};

console.log(deepFlatten([1, [2, [3, [4]]]])); // expected output : [1, 2, 3, 4]
