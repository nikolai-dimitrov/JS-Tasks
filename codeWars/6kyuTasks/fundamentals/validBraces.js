// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

const validBraces = (braces) => {
	const stack = [];
	const map = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < braces.length; i++) {
		const brace = braces[i];
		if (!map[brace]) {
			stack.push(brace);
		} else {
			if (map[brace] == stack[stack.length - 1]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length == 0 ? true : false;
};
// console.log(validBraces("()))"));
// console.log(validBraces("[]"));
console.log(validBraces("((())"));

// console.log(validBraces("(){}[]"));
// validBraces("([{}])");
// validBraces("(}");
// console.log(validBraces("[(])"));
// console.log(validBraces("[({})](]"));
