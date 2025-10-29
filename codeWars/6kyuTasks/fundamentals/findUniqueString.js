const findUnique = (arr) => {
	let lettersMap = {};
	let emptyStrings = 0;
	arr.forEach((str) => {
		if (str.trim() == "") {
			if (!lettersMap[str]) {
				lettersMap[str] = 0;
			}

			lettersMap[str] += 1;
			emptyStrings += 1;
		}
		str.toLowerCase()
			.split("")
			.forEach((letter) => {
				if (letter != " ") {
					if (!lettersMap[letter]) {
						lettersMap[letter] = 0;
					}
					lettersMap[letter] += 1;
				}
			});
	});

	let searchedLetterArr = Object.entries(lettersMap).sort((a, b) => {
		return a[1] - b[1];
	});

	if (emptyStrings > 1) {
		searchedLetterArr = searchedLetterArr.filter(([k, v]) => k.trim() != "");
	}

	let searchedLetter = searchedLetterArr[0][0];

	let result = arr.filter((el) => el.toLowerCase().includes(searchedLetter));

	if (result.length > 1) {
		return result.filter((el) => el.trim() == "").join("");
	}

	return result.join("");
};

// findUnique(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]);
// findUnique(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]);
// findUnique(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]);
// findUnique(["abc", "acb", "foo"]);
// findUnique(["abc", "acb", "   "]);
// console.log(findUnique(["    ", "a", " "]));
console.log(
	findUnique([
		"    ",
		"a              ",
		"a              ",
		"foobarbarfofobarafobraoooofrab",
	])
);
