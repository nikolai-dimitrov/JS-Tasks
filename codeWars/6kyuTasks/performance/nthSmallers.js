const nthSmallest = (arrs, k) => {
	const map = {};
	const allNums = [];

	arrs.forEach((el) => {
		allNums.push(...el);
	});

	allNums.forEach((el, i) => {
		map[el] = 1;
	});

	return Object.keys(map)[k - 1];
};

console.log(nthSmallest([[1, 5], [2], [4, 8, 9]], 4));
console.log(
	nthSmallest(
		[
			[2, 8, 12],
			[4, 6, 10],
		],
		5
	)
);
console.log(nthSmallest([[2, 4, 6, 8, 10, 12]], 5));
console.log(nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7));
