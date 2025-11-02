const compoundMatch = (words, target) => {
	const wordsIndexMap = {};
	const wordsIndexes = [];

	const wordsArr = [];
	const searchedWords = [];

	for (let y = 0; y < words.length; y++) {
		const word = words[y];
		if (target.includes(word) && !wordsArr.includes(word)) {
			wordsArr.push(word);
		}

		// first occurrence index is saved into the map object
		if (!wordsIndexMap[word]) {
			wordsIndexMap[word] = y;
		}
	}

	for (let i = 0; i < wordsArr.length - 1; i++) {
		const currentWord = wordsArr[i];
		let isFound = false;
		for (let j = 1; j < wordsArr.length; j++) {
			const nextWord = wordsArr[j];
			const compoundWord = `${currentWord}${nextWord}`;
			const reversedCompoundWord = [currentWord, nextWord]
				.reverse()
				.join("");

			if (compoundWord == target) {
				wordsIndexes.push(
					wordsIndexMap[currentWord],
					wordsIndexMap[nextWord]
				);

				searchedWords.push(currentWord, nextWord);
				isFound = true;
				break;
			} else if (reversedCompoundWord == target) {
				wordsIndexes.push(
					wordsIndexMap[nextWord],
					wordsIndexMap[currentWord]
				);

				searchedWords.push(currentWord, nextWord);
				isFound = true;
				break;
			}
		}

		if (isFound) {
			break;
		}
	}

	if (wordsIndexes.length > 0) {
		return [...searchedWords, wordsIndexes];
	}

	return null;
};
const arr1 = ["super", "bow", "bowl", "tar", "get", "book", "let"],
	arr2 = ["bow", "crystal", "organic", "ally", "rain", "line"],
	arr3 = ["top", "main", "tree", "ally", "fin", "line"],
	arr4 = ["less", "star", "star", "less"];

console.log(compoundMatch(arr1, "superbowl"));
console.log(compoundMatch(arr2, "crystalline"));
console.log(compoundMatch(arr2, "rainbow"));
console.log(compoundMatch(arr4, "starless"));
