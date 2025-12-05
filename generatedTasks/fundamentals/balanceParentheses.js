const isBalanced = (str) => {
	const stack = [];
	const bracketsMap = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < str.length; i++) {
		const currentBracket = str[i];

		if (["(", "[", "{"].includes(currentBracket)) {
			stack.push(currentBracket);
		} else {
			if (bracketsMap[currentBracket] == stack[stack.length - 1]) {
				stack.pop();
			}
		}
	}

	return stack.length > 0 ? false : true;
};

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
