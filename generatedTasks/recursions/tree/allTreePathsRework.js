const dfs = (node) => {
	if (!node) {
		return [];
	}

	if (!node.left && !node.right) {
		return [[node.val]];
	}

	const left = dfs(node.left);
	const right = dfs(node.right);

	const result = [];

	for (let i = 0; i < left.length; i++) {
		result.push([node.val, ...left[i]]);
	}

    for (let i = 0; i < right.length; i++) {
		result.push([node.val, ...right[i]]);
	}

	return result;
};
const findMaxDepth = (root) => {
	return dfs(root);
};

const root = {
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
		left: null,
		right: null,
	},
};

console.log(findMaxDepth(root));
