const sortOdd = (array) => {
	const oddIndexes = [];
	const oddNumbers = [];

	array.forEach((el, i) => {
		if (el % 2 != 0) {
			oddIndexes.push(i);
			oddNumbers.push(el);
		}
	});

	oddNumbers.sort((a, b) => a - b);

	oddIndexes.forEach((el, i) => {
		array.splice(el, 1, oddNumbers[i]);
	});

	return array;
};

sortOdd([7, 1]);
sortOdd([5, 8, 6, 3, 4]);
sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
sortOdd([-6, +0, 30, -6, 20, -15, 40, -5, 1, 38, -27, -12, 3, -26, 22, -27, 35])
