const validParentheses = (str) => {
	const parenthesesOpposites = {
		"]": "[",
		")": "(",
		"}": "{",
	};

	const stack = [];

	for (const char of str) {
		if (["[", "{", "("].includes(char)) {
			stack.push(char);
		} else {
			if (parenthesesOpposites[char] == stack[stack.length - 1]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	if (stack.length > 0) {
		return false;
	}

	return true;
};

console.log(validParentheses("({[]}"));
console.log(validParentheses("(){}[]"));

console.log(validParentheses("({[]})"));
console.log(validParentheses("({[})"));
