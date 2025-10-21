const treeDepth = (tree) => {
	let depth = 0;
	if (Array.isArray(tree)) {
		return null;
	}

	if (!(tree instanceof Object)) {
		return null;
	}

	tree["depth"] = 0;

	const getDepth = (tree, depth) => {
		tree["depth"] = depth;
		for (const key in tree) {
			const currentElement = tree[key];
			if (currentElement instanceof Object) {
				depth += 1;
				getDepth(currentElement, depth);
			}
		}
	};

	getDepth(tree, depth);
	return tree;
};

console.log(treeDepth({ a: 1, b: 2, c: { d: { e: 3 } } }));
console.log(treeDepth({ a1: 1, a2: 2, a: { b: { c: { d: { e: { f: { g: { h: { i: { j: { k: {}}}}}}}}}}}}))
console.log(treeDepth(null));

