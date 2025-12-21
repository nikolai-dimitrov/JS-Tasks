const dfs = (node, path, output) => {
	if (!node) {
		return null;
	}

	path.push(node.val);

	if (!node.left && !node.right) {
		output.push(path);
		return path;
	}

	dfs(node.left, [...path], output);
	dfs(node.right, [...path], output);
	return;
};
const findMaxDepth = (node) => {
	const output = [];

	if (!node) {
		return;
	}

	dfs(node, [], output);
	return output;
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

findMaxDepth(root);
