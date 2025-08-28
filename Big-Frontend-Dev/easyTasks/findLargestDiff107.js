// NOT using Math.min and Math.max
const largestDiff = (arr) => {
	let currentLargestDiff = 0;
	if (arr.length == 0 || arr.length == 1) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		const currentNum = arr[i];

		for (let j = i + 1; j < arr.length; j++) {
			const nextNum = arr[j];

			const difference = Math.abs(currentNum - nextNum);
			if (difference > currentLargestDiff) {
				currentLargestDiff = difference;
			}
		}
	}

    return currentLargestDiff
};

largestDiff([-1, 2, 3, 10, 9]);
// 11,  obviously Math.abs(-1 - 10) is the largest
largestDiff([]);
// 0
largestDiff([1]);
// 0
