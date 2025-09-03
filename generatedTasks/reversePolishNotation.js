const evalRPN = (arr) => {
	const stack = [];
	const operators = {
		"*": (a, b) => a * b,
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"/": (a, b) => a / b,
	};

	for (const el of arr) {
		if (operators[el]) {
			const secondEl = stack.pop();
			const firstEl = stack.pop();
            
			result = operators[el](firstEl, secondEl);
			stack.push(result);
		} else {
			stack.push(Number(el));
		}
	}

	console.log(stack);
};

evalRPN(["2", "1", "+", "3", "*"]);
evalRPN(["4", "13", "5", "/", "+"]);

