// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
const reverseOrRotate = (str, n) => {
	if (str == "" || n <= 0) {
		return "";
	}

	if (n > str.length) {
		return "";
	}

	let result = "";
	const array = str.split("");
	while (array.length >= n) {
		let subArray = array.splice(0, n);
		let digitsSum = subArray.reduce(
			(val, currentVal) => (val += Number(currentVal)),
			0
		);

		if (digitsSum % 2 == 0) {
			subArray.reverse();
		} else {
			let firstEl = subArray.shift();
			subArray.push(firstEl);
		}

		result += subArray.join("");
	}

	return result;
};

reverseOrRotate("123456987654", 6);
reverseOrRotate("123456987653", 6);
reverseOrRotate("66443875", 4);
reverseOrRotate("", 8);
reverseOrRotate("123456779", 0);
