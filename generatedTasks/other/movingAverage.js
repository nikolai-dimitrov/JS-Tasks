const movingAverage = (arr, sequenceLength) => {
	const result = [];
	for (let i = 0; i <= arr.length - sequenceLength; i++) {
		const currentSequence = arr.slice(i, i + sequenceLength);
        
		const sequenceAverageSum =
			currentSequence.reduce(
				(prevValue, currentValue) => (prevValue += currentValue)
			) / sequenceLength;

		result.push(sequenceAverageSum);
	}

	console.log(result);
};

movingAverage([1, 2, 3, 4, 5], 3);
