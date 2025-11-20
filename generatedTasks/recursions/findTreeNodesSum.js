const findSum = (tree, targetSum = 22) => {
	const result = [];
	dfs(tree, 0, [], result, targetSum);
	return result;
};

const dfs = (node, currentSum, path, result, t) => {
	if (node == null) {
		return;
	}

	let newSum = (currentSum += node.value);
	const newPath = [...path, node.value];

	if (!node.left && !node.right) {
		if (newSum == t) {
			result.push(...newPath);
		}

		return;
	}

	dfs(node.left, newSum, newPath, result, t);
	dfs(node.right, newSum, newPath, result, t);
};

console.log(
	findSum(
		{
			value: 5,
			left: {
				value: 4,
				left: {
					value: 11,
					left: {
						value: 7,
						left: null,
						right: null,
					},
					right: {
						value: 2,
						left: null,
						right: null,
					},
				},
				right: null,
			},
			right: {
				value: 8,
				left: { value: 13, left: null, right: null },
				right: {
					value: 4,
					left: null,
					right: { value: 1, left: null, right: null },
				},
			},
		},
		22
	)
);
