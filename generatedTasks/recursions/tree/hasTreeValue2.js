const search = (node, target) => {
	if (!node) {
		return false;
	}
	const children = [node.left, node.right];

	for (const child of children) {
		if (child?.val == target) {
			return true;
		} else {
			const res = search(child, target);
			if (res) {
				return true;
			}
		}
	}

	return null;
};

const hasValue = (root, target) => {
	const result = search(root, target);
	return result ? true : false;
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

console.log(hasValue(root, target));
