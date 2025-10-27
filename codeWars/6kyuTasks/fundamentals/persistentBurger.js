// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// Example: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
const persistent = (num) => {
	digits = num.toString().split("");
	let multiplicationsCount = 0;

	while (digits.length > 1) {
		digits = digits.reduce((acc, value) => acc * value, 1);
		digits = digits.toString().split("");

		multiplicationsCount += 1;
	}

	return multiplicationsCount;
};

persistent(39);
persistent(999);
persistent(4)

