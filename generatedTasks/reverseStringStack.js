const reverseString = (str) => {
	const stack = [];
	let reversedStr = '';

	for (const char of str) {
		stack.push(char);
	}

	for (let i = stack.length - 1; i >= 0; i--) {
        const currentChar = stack.pop()
        reversedStr += currentChar
	}

    return reversedStr
};

reverseString("hello");
reverseString("JavaScript");
