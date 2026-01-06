// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
const mostFrequent = (arr) => {
	arr.sort((a, b) => a - b);
	const result = [];
	let lastNum = arr[0];
	let lastIndex = 0;
	let highestSequence = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentNum = arr[i];
		if (currentNum != lastNum) {
			lastNum = currentNum;

			if (i - lastIndex > highestSequence) {
				result.length = 0;
				result.push(arr[lastIndex]);
				highestSequence = i - lastIndex;
			} else if (i - lastIndex == highestSequence) {
				result.push(arr[lastIndex]);
			}

			lastIndex = i;
		}
	}

	if (arr.length - lastIndex >= highestSequence) {
		result.push(arr[arr.length - 1]);
	}

	return result.sort((a, b) => b - a)[0];
};
console.log(mostFrequent([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(mostFrequent([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
console.log(mostFrequent([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(
	mostFrequent([
		12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10, 13, 14, 14, 14, 14,
	])
);
