const firstDuplicate = (str) => {
	const lettersCounter = new Map();

	for (const letter of str) {
		if (!lettersCounter.has(letter)) {
			lettersCounter.set(letter, 1);
		} else {
			return letter;
		}
	}

	return null;
};

console.log(firstDuplicate("abca"));
// 'a'
console.log(firstDuplicate("abcdefe"));
// 'e'
console.log(firstDuplicate("abcdef"));
// null
