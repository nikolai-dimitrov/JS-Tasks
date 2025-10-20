const beggars = (values, n) => {
	const valuesCopy = [...values];
	let result = [];

	if (n == 0) {
		return result;
	}

	let i = 0;

	if (values.length < n) {
		result = Array(n).fill(0);
		result.splice(0, valuesCopy.length, ...valuesCopy.slice(0, n));

		return result;
	}

	result = valuesCopy.splice(0, n);

	while (valuesCopy.length > 0) {
		const currentNum = valuesCopy.shift();
		result[i] += currentNum;
		i += 1;

		if (i == n) {
			i = 0;
		}
	}

	return result;
};

beggars([1, 2, 3, 4, 5], 1);
beggars([1, 2, 3, 4, 5], 2);
beggars([1, 2, 3, 4, 5], 3);
beggars([1, 2, 3, 4, 5], 6);
beggars([1, 2, 3, 4, 5], 0);
beggars(
	[
		52, 28, 80, 407, 822, 7, 595, 5, 393, 9, 4, 9, 93, 689, 388, 662, 66,
		805, 5, 469, 65, 7, 92, 4, 870, 72, 3, 24, 47, 88, 738, 194, 95,
	],
	6
);
