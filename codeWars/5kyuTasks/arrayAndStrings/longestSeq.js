const longestZeroSeq = (arr) => {
	const sequenceIndexes = [];
	let currentSum = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		const currentNum = arr[i];
		currentSum += currentNum;

		for (let j = i + 1; j < arr.length; j++) {
			const nextNum = arr[j];
			currentSum += nextNum;

			if (currentSum == 0) {
				sequenceIndexes.push([i, j]);
			}
		}

		currentSum = 0;
	}

	sequenceIndexes.sort((a, b) => {
		if (a[1] - a[0] < b[1] - b[0]) {
			return -1;
		} else {
			return 1;
		}
	});

	if (sequenceIndexes.length > 0) {
		let [startIndex, endIndex] = sequenceIndexes.pop();
		return arr.slice(startIndex, endIndex + 1);
	}

	return [];

};

console.log(
	longestZeroSeq([
		25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11,
	])
);
console.log(longestZeroSeq([1, 2, -3, 7, 8, -16]));
console.log(longestZeroSeq([]));
