const pathsEvenSum = (node, currentSum = 0) => {
	if (!node) {
		return 0;
	}

	currentSum += node.val;

	if (!node.left && !node.right) {
		if (currentSum % 2 == 0) {
			return 1;
		} else {
			return 0;
		}
	}
    
    return  pathsEvenSum(node.left, currentSum) + pathsEvenSum(node.right, currentSum);
};

const getPaths = (root) => {
	const result = pathsEvenSum(root);
	return result;
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
