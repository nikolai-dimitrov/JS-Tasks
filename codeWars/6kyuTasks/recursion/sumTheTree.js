const sumTheTree = (root) => {
	if (root == null) {
		return 0;
	}

    let result = root.value;

	result += sumTheTree(root.left);
	result += sumTheTree(root.right);

	return result;
};

console.log(sumTheTree({
	value: 10,
	left: { value: 1, left: null, right: null },
	right: { value: 2, left: null, right: null },
}));

console.log(sumTheTree({
	value: 11,
	left: { value: 0, left: null, right: null },
	right: {
		value: 0,
		left: null,
		right: { value: 1, left: null, right: null },
	},
}));
