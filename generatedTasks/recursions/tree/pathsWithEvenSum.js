const pathsEvenSum = (node, paths = [], result = []) => {
	if (!node) {
		return 0;
	}

	paths.push(node.val);

	if (!node.left && !node.right) {
		const pathsSum = paths.reduce((prev, value) => (prev += value), 0);
		if (pathsSum % 2 == 0) {
			result.push(true);
		}
	}

	pathsEvenSum(node.left, [...paths], result);
	pathsEvenSum(node.right, [...paths], result);

	return result;
};

const getPaths = (root) => {
	const result = pathsEvenSum(root);
	return result.length;
};

console.log(
	getPaths({
		val: 1,
		left: {
			val: 2,
			left: {
				val: 4,
				left: null,
				right: null,
			},
			right: null,
		},
		right: {
			val: 3,
			left: {
				val: 6,
				left: null,
				right: null,
			},
			right: {
				val: 5,
				left: null,
				right: null,
			},
		},
	})
);
