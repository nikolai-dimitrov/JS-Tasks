// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
const operations = {
	multiply: (a, b) => a * b,
	divide: (a, b) => Math.floor(a / b),
	plus: (a, b) => a + b,
	minus: (a, b) => a - b,
};

const createFn = () => {
	const functions = [];

	for (let i = 0; i < 10; i++) {
		const fn = (args) => {
			value = i;

			if (args && args.length > 1) {
				console.log(operations[args[1]](value, args[0]));
				return operations[args[1]](value, args[0]);
			}

			return value;
		};

		functions.push(fn);
	}

	return functions;
};
const [zero, one, two, three, four, five, six, seven, eight, nine] = createFn();
const times = (arg) => {
	return [arg, "multiply"];
};

const plus = (arg) => {
	return [arg, "plus"];
};

const minus = (arg) => {
	return [arg, "minus"];
};

const dividedBy = (arg) => {
	return [arg, "divide"];
};

seven(times(five())); //  must return 35
four(plus(nine())); //  must return 13
eight(minus(three())); //  must return 5
six(dividedBy(two())); //  must return 3
eight(dividedBy(three()));
