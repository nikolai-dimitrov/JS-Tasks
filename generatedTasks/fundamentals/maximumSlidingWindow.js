const maxSlidingWindow = (arr, sequenceLength) => {
	const result = [];
	for (let i = 0; i <= arr.length - sequenceLength; i++) {
		const currentSequence = arr.slice(i, i + sequenceLength);
        const max = Math.max(...currentSequence)

		result.push(max);
	}

	console.log(result);
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
