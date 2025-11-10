// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

// You must determine if all that is open is then closed, and nothing is closed which is not already open!

// You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

// You may assume that the second string always has an even number of characters.

const findBalance = (str, symbols) => {
	let extractedSymbols = "";
	let openingSymbols = [];
	closingSymbols = [];
	let map = {};
	const stack = [];

	for (let j = 0; j < symbols.length; j++) {
		const symbol = symbols[j];
		if (j % 2 == 0) {
			openingSymbols.push(symbol);
		} else {
			closingSymbols.push(symbol);
			map[symbol] = symbols[j - 1];
		}
	}

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (symbols.includes(char)) {
			extractedSymbols += char;
		}
	}

	if (extractedSymbols.length % 2 != 0) {
		return false;
	}

	for (let index = 0; index < extractedSymbols.length; index++) {
		const currentSymbol = extractedSymbols[index];
		if (openingSymbols.includes(currentSymbol)) {
			if (
				openingSymbols.includes(currentSymbol) &&
				closingSymbols.includes(currentSymbol)
			) {
			} else {
				stack.push(currentSymbol);
			}
		} else {
			if (map[currentSymbol] !== stack.pop()) {
				return false;
			}
		}
	}

	return true;
};

console.log(findBalance("(Sensei says yes!)", "()"));
console.log(findBalance("(Sensei says no!", "()"));
console.log(findBalance("(Sensei [says] yes!)", "()[]"));
console.log(findBalance("(Sensei [says) no!]", "()[]"));
console.log(findBalance("Sensei says -yes-!", "--"));
console.log(findBalance("Sensei -says no!", "--"));
console.log(findBalance("Sensei says 'yes'!", "''"));
console.log(findBalance("Sensei say's no!", "''"));
