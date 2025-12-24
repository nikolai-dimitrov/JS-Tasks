const dfs = (node, depth = 0, result = []) => {
	if (!node) {
		return 0;
	}

	depth += 1;
	if (!node.left && !node.right) {
		result.push(depth);
	}

	dfs(node.left, depth, result);
	dfs(node.right, depth, result);

	return result;
};
const findMaxDepth = (node) => {
	const result = dfs(node);
	console.log(Math.max(...result));
};

const root = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: {
				val: 73,
				left: null,
				right: null,
			},
		},
		right: null,
	},
	right: {
		val: 3,
		left: null,
		right: null,
	},
};

findMaxDepth(root);
