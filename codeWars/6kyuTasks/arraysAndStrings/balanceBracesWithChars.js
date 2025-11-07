const isBalanced = (string) => {
	const openingBrackets = ["{", "[", "("];
	const closingBrackets = ["}", "]", ")"];
	const bracketsMap = {
		"}": "{",
		"]": "[",
		")": "(",
	};

	const que = [];
	let leftover = 0;
	let validPairs = 0;
	const charsArr = string.split("");

	for (let i = 0; i < charsArr.length; i++) {
		const currentElement = charsArr[i];

		if (openingBrackets.concat(closingBrackets).includes(currentElement)) {
			if (openingBrackets.includes(currentElement)) {
				que.push(currentElement);
			} else {
				const lastBracket = que.pop();
				if (lastBracket == bracketsMap[currentElement]) {
					validPairs += 1;
				} else {
					leftover += lastBracket ? 2 : 1;
				}
			}
		}
	}

	leftover += que.length;

	return leftover
		? [false, validPairs, leftover]
		: [true, validPairs, leftover];
};
// console.log(isBalanced("((())"));
// console.log(isBalanced("(string[)5])"))
console.log(isBalanced("((()]))"));
// console.log(isBalanced("()[{]{}}"));
// console.log(isBalanced("([{}])()(){}[{}])"));

// console.log(isBalanced("((()))"));
// console.log(isBalanced("(string[5])")); // => [true, 2, 0]
// console.log(isBalanced("(string[)5]")); // => [false, 0, 4]
// console.log(isBalanced("")); // => [true, 0, 0]
// console.log(isBalanced("(([()]))")); // => [true, 4, 0]
// console.log(isBalanced("({)}")); // => [false, 0, 4]
