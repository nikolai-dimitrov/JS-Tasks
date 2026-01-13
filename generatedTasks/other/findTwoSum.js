const findTwo = (arr, sum) => {
	const map = {};
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const numToFind = sum - num;

		if (map[num]) {
			return [map[num], num];
		}
		map[numToFind] = num;
	}

	return null;
};
console.log(findTwo([-1, 11], 10));
console.log(findTwo([1, 3], 13));
console.log(findTwo([5, 5], 10));
console.log(findTwo([1, 5, 7, 4, 11, 1, 3], 10));
