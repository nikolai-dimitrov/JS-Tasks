const slidingWindow = (arr, k) => {
	let currentSum = arr[0] + arr[1];
	let max = currentSum;

	for (let i = k; i < arr.length; i++) {
		const currentNum = arr[i];

		currentSum = currentSum - arr[i - k] + currentNum;

		if (currentSum > max) {
			max = currentSum;
		}
	}

	return max;
};

console.log(slidingWindow([1, 2, 3, 4, 5], 2));
