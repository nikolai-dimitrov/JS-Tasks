const closingInSum = (n) => {
	const numAsArray = n.toString().split("");
	const numLen = numAsArray.length;

	let result = 0;
	for (let i = 0; i < numLen / 2; i++) {
		if (numAsArray.length == 1) {
			result += Number(numAsArray[0]);
			break;
		}

		const firstDigit = numAsArray.shift();
		const lastDigit = numAsArray.pop();

		result += Number(`${firstDigit}${lastDigit}`);
	}

	return result;
};
closingInSum(1);
closingInSum(2520);
closingInSum(121);
closingInSum(1039);
closingInSum(22225555);
