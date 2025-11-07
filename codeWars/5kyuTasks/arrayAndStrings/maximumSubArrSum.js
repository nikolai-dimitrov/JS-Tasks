// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

const findMax = (arr) => {
	let currentSum = 0;
	let maxSum = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentNum = arr[i];

		currentSum += currentNum;

		currentSum = Math.max(currentSum, currentNum);

		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
};

findMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
findMax([]);
