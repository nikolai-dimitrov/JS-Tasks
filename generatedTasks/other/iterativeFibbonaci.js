const fibonacci = (n) => {
	const sequence = [];

	for (let i = 0; i < n; i++) {
		if (i == 0 || i == 1) {
			sequence.push(i);
			continue;
		}

		let currentNum =
			sequence[sequence.length - 1] + sequence[sequence.length - 2];
		sequence.push(currentNum);
	}

	return sequence;
};

console.log(fibonacci(7));
