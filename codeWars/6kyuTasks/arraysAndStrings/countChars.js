const count = (string) => {
	const result = {};
	for (const char of string) {
		if (!result[char]) {
			result[char] = 0;
		}

		result[char] += 1;
	}

	return result;
};

console.log(count(""));
console.log(count("a"));
console.log(count("aba"));
