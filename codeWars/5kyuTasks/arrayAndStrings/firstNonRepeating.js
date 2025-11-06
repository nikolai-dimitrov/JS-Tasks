const firstNonRepeating = (string) => {
	const lString = string.toLowerCase();

	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		const lChar = string[i].toLowerCase();

		if (lString.indexOf(lChar) == lString.lastIndexOf(lChar)) {
			return char;
		}
	}

	return "";
};
console.log(firstNonRepeating("sTrest"));
console.log(firstNonRepeating("stress"));
console.log(firstNonRepeating("a"));
console.log(firstNonRepeating("moonmen"));
console.log(firstNonRepeating("    "));

