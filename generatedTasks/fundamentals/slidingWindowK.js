const slidingWindow = (arr, k) => {
	let currentSum = arr
		.slice(0, k)
		.reduce((prevVal, currentVal) => (prevVal += currentVal), 0);

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
