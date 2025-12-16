const findUnique = (arr) => {
	const counter = {};

	if (arr.length == 1) {
		return arr[0];
	}

	arr.forEach((num) => {
		if (!counter[num]) {
			counter[num] = 0;
		}

		counter[num] += 1;

		if (counter[num] == 2) {
			delete counter[num];
		}
	});

	return Number(Object.keys(counter)[0]);
};

console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]));
