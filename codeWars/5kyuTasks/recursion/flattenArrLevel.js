// You have to write an algorithm that flatten an arrays structure to 2 levels.
//  It means that each array under the second level will be merge to its parent. Only two levels are kept.

const flatten = (array) => {
	const result = [];

	const flat = (args) => {
		const result = [];
		for (const el of args) {
			if (Array.isArray(el)) {
				result.push(...flat(el));
			} else {
				result.push(el);
			}
		}

		return result;
	};

	for (const el of array) {
		if (Array.isArray(el)) {
			result.push(flat(el));
		} else {
			result.push(el);
		}
	}

	return result;
};

console.log(
	flatten([
		1,
		[2, 3],
		[4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17],
		18,
	])
);

console.log(flatten([1, [2, 3, [], [4, [], 5]]]));
