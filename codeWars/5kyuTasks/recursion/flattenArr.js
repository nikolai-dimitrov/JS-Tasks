// For this exercise you will create a global flatten method.
// The method takes in any number of arguments and flattens them into a single array.
// If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments.
//  Any nested arrays, no matter how deep, should be flattened into the single array result.

const flatten = (...args) => {
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

	return flat(args);
};

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten("a", ["b", 2], 3, 666, [[4], ["c"]]));
console.log(flatten([1, [2, 3], 4, 5, [6, [7, [8]]]]));
