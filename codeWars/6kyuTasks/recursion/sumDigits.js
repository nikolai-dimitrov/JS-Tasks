// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

const digitalRoot = (n) => {
	let digitsArray = n.toString().split("");

	if (digitsArray.length == 1) {
		return Number(digitsArray.join(""));
	}

	let result = digitsArray.reduce((acc, value) => acc + Number(value), 0);
	result = digitalRoot(result);

	return result;
};

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
