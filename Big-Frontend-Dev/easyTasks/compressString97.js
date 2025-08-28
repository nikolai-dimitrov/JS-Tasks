const compress = (str) => {
	let currentChar = str[0];
	let currentCharAppearances = 1;
	let newString = "";

	if (str.length <= 1) {
		return currentChar;
	}

	for (let i = 1; i < str.length; i++) {
		const nextChar = str[i];

		if (currentChar != nextChar) {
			newString += `${currentChar}${
				currentCharAppearances > 1 ? currentCharAppearances : ""
			}`;

			currentChar = nextChar;
			currentCharAppearances = 1;
		} else {
			currentCharAppearances += 1;
		}

		if (i == str.length - 1) {
			newString += `${currentChar}${
				currentCharAppearances > 1 ? currentCharAppearances : ""
			}`;
		}
	}

	return newString;
};

console.log(compress("a")); // 'a'
console.log(compress("aa")); // 'a2'
console.log(compress("aaa")); // 'a3'
console.log(compress("aaab")); // 'a3b'
console.log(compress("aaabb")); // 'a3b2'
console.log(compress("aaabba")); // 'a3b2a'
