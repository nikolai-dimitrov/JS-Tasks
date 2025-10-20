const deepCount = (a) => {
	let result = 0;

	for (const el of a) {
		if (el instanceof Array) {
			result += deepCount(el);
		}
	}

    result += a.length
	return result;

};

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
