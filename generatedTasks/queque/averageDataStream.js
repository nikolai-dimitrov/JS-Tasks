const dataStream = (nums, k) => {
	const queque = [];
	const result = [];
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		if (queque.length >= k) {
			const removedNum = queque.shift();
			sum -= removedNum;
		}

		queque.push(currentNum);
		sum += currentNum;

		result.push(sum / queque.length);
	}

	console.log(result);
};

dataStream([1, 10, 3, 5], 3);

