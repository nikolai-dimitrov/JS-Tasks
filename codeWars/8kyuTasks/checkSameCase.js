// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

const checkSameCase = (a, b) => {
	const charsArray = [a, b];
	let notLetter = false;

	const [firstLetter, secondLetter] = charsArray.map((el) => {
		const asciiUpperCodesRange = [65, 90];

		const elementCharCode = el.charCodeAt();
		if (el.toUpperCase() == el) {
			asciiUpperCodesRange.push(elementCharCode);
			asciiUpperCodesRange.sort((a, b) => a - b);
			if (asciiUpperCodesRange[1] != elementCharCode) {
				notLetter = true;
			}

			return true;
		} else {
			return false;
		}
	});

	if (notLetter) {
		return -1;
	}

	if (firstLetter == secondLetter) {
		return 1;
	} else {
		return 0;
	}
};

// console.log(checkSameCase("V", "b"));
// console.log(checkSameCase("?", "v"));
// console.log(checkSameCase("H", "A"));
console.log(checkSameCase("\t", "A"));
