// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
const isBig = (num) => {
	const parsedNum = num.toString();
	const pow = parsedNum.length;
	let result = null;

	for (const digit of parsedNum) {
		result += Math.pow(Number(digit), pow);
	}

	return result === num;
};

console.log(isBig(153));
console.log(isBig(1652));
