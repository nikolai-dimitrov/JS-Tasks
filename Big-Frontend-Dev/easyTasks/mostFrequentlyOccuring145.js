const count = (str) => {
	const charsCount = {};
	for (const char of str) {
		if (!charsCount[char]) {
			charsCount[char] = 0;
		}

		charsCount[char] += 1;
	}

	const currentHighestValue = Math.max(...Object.values(charsCount));

	const mostFrequencyChars = Object.keys(charsCount).filter(
		(key) => charsCount[key] == currentHighestValue
	);
    
	if (mostFrequencyChars.length > 1) {
		return mostFrequencyChars;
	}

	return mostFrequencyChars.join("");
};

console.log(count("abbccc"));
console.log(count("abbcccddd"));
