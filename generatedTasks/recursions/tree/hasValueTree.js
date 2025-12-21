const search = (node, target) => {
	if (!node) {
		return false;
	}

	if (node.val == target) {
		return true;
	}

	const left = search(node.left, target);
	if (left == true) {
		return true;
	}

	const right = search(node.right, target);

	return right;
};

const hasValue = (root, target) => {
	const result = search(root, target);
	console.log(result);
	return result;
};

const root = {
	val: 5,
	left: {
		val: 9,
		left: null,
		right: null,
	},
	right: {
		val: 7,
		left: null,
		right: {
			val: 8,
			left: null,
			right: {
				val: 1,
				left: null,
				right: null,
			},
		},
	},
};

const target = 8;

hasValue(root, target);
