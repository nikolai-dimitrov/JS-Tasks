const getMax = (arr, k) => {
	const queue = [];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const currentNum = arr[i];

		if (queue[0] <= i - k) {
			queue.shift();
		}

		while (currentNum > arr[queue[queue.length - 1]]) {
			queue.pop();
		}

		queue.push(i);

		if (i >= k - 1) {
			result.push(arr[queue[0]]);
		}
	}

    return result
};

console.log(getMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(getMax([9, 5, 3, 1, 6], 2));
