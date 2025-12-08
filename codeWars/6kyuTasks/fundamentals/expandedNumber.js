// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

const expandedNumber = (num) => {
	const numAsString = num.toString();
	const numLen = numAsString.length;

	let result = [];

	for (let i = 0; i < numAsString.length; i++) {
		const currentDigit = numAsString[i];
		if (currentDigit != 0) {
			let num = `${currentDigit}${"0".repeat(numLen - i - 1)}`;
			result.push(num);
		}
	}

	return result.join(" + ");
};

expandedNumber(12);
expandedNumber(45);
expandedNumber(70304);
expandedNumber(71304);
