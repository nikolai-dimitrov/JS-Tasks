const slidingWindowSum = (nums, k) => {
	let sum = 0;
	const queque = [];
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];

		queque.push(currentNum);

		if (queque.length > k) {
			result.push(sum);
			const removedNum = queque.shift();
			sum -= removedNum;
		}

		sum += currentNum;
	}
    
    result.push(sum)
	console.log(result);
};

slidingWindowSum([1, 2, 3, 4, 5], 3);
