const reverseWords = (str) => {
	const stack = [];
	const result = [];

	for (const char of str.split(' ')) {
		stack.push(char);
	}

	while (stack.length) {
		result.push(stack.pop());
	}

	console.log(result.join(" "));
};

reverseWords("I love JS");
