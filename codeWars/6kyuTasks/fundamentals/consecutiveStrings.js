const consecutiveStrings = (strarr, k) => {
	let result = "";
	let currentMaxLen = 0;

	if (k > strarr.length || strarr.length == 0 || k <= 0) {
		return result;
	}

	for (let i = 0; i < strarr.length - (k - 1); i++) {
		const concatedWords = strarr.slice(i, i + k).join("");

		if (concatedWords.length > currentMaxLen) {
			currentMaxLen = concatedWords.length;
			result = concatedWords;
		}
	}

	return result;
};

consecutiveStrings(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2);
consecutiveStrings(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15);
