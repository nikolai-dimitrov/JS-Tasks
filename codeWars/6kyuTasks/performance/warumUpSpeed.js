// The digit root of a number (dr) is the sum of the digits of a number. For example, the integer 749, has a digit root equals to 20.

// In effect: 7 + 4 + 9 = 20.

// We define here the deeper square double digit root of an integer n, (dsddr), the sum of the squares of every digit of the digit root of n.

// The dsddr of 749 will be 4: 22 + 02 = 4

// We define the function f, like: val = dr(n) + dsddr(n) and than sort common nums based on val
const dr = (num) => {
	return String(num)
		.split("")
		.reduce((acc, value) => (acc += Number(value)), 0);
};

const dsddr = (digitRoot) => {
	return String(digitRoot)
		.split("")
		.reduce((acc, value) => (acc += Number(Math.pow(value, 2))), 0);
};

const intersection = (arr, set) => {
	const commonElements = new Set(arr.filter((el) => set.has(el)));
	return Array.from(commonElements);
};

const warmUpSpeed = (arr1, arr2) => {
	const sortValue = {};
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	let commonElements =
		arr1.length > arr2.length
			? intersection(arr2, set1)
			: intersection(arr1, set2);

	commonElements.forEach((num) => {
		const digitRoot = dr(num);
		const squareDigitRoot = dsddr(digitRoot);
		const value = digitRoot + squareDigitRoot;

		sortValue[num] = value;
	});

	const sortedResult = commonElements.sort((a, b) => {
		if (sortValue[a] < sortValue[b]) {
			return 1;
		}

		if (sortValue[a] > sortValue[b]) {
			return -1;
		}

		if (sortValue[a] == sortValue[b]) {
			return a - b;
		}
	});
	console.log(sortedResult);
	return sortedResult;
};

warmUpSpeed(
	[5, 56, 28, 35, 12, 27, 64, 99, 18, 31, 14, 6],
	[28, 17, 31, 63, 64, 5, 18, 17, 95, 56, 37, 5, 28, 16]
);
