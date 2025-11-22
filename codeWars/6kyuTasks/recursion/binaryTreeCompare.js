const compare = (a, b) => {
	const result = [];

	dfs(a, b, result);
	const isDifferent = result.some((el) => el == true);
	if (isDifferent) {
		return false;
	}
	return true;
};

const dfs = (nodeA, nodeB, result) => {
	if (!nodeA && !nodeB) {
		return;
	}

	if (!nodeA || !nodeB) {
		result.push(true);
		return;
	}

	if (nodeA.val != nodeB.val) {
		result.push(true);

		return;
	}

	dfs(nodeA.left, nodeB.left, result);
	dfs(nodeA.right, nodeB.right, result);
};

var aNode = { val: 1, left: null, right: null };
var bNode = { val: 1, left: null, right: null };
var cNode = { val: 2, left: null, right: null };

console.log(compare(aNode, bNode));
console.log(compare(aNode, cNode));

// let a = {
// 	value: 5,
// 	left: {
// 		value: 4,
// 		left: {
// 			value: 11,
// 			left: null,
// 			left: {
// 				value: 7,
// 				left: null,
// 				right: null,
// 			},
// 			right: {
// 				value: 2,
// 				left: null,
// 				right: null,
// 			},
// 		},
// 		right: null,
// 	},
// 	right: {
// 		value: 8,
// 		left: { value: 13, left: null, right: null },
// 		right: {
// 			value: 4,
// 			left: null,
// 			right: { value: 1, left: null, right: null },
// 		},
// 	},
// };

// let b = {
// 	value: 5,
// 	left: {
// 		value: 4,
// 		left: {
// 			value: 11,
// 			left: {
// 				value: 7,
// 				left: null,
// 				right: null,
// 			},
// 			right: {
// 				value: 2,
// 				left: null,
// 				right: null,
// 			},
// 		},
// 		right: null,
// 	},
// 	right: {
// 		value: 8,
// 		left: { value: 13, left: null, right: null },
// 		right: {
// 			value: 4,
// 			left: null,
// 			right: { value: 1, left: null, right: null },
// 		},
// 	},
// };

// console.log(compare(a, b));

// // const compareTrees = (aTree,bTree) => {
// // 	const resultAtree = [];
// // 	const resultBtree = [];

// // 	dfs(aTree, [], resultAtree);
// // 	dfs(bTree, [], resultBtree);

// // 	console.log(resultAtree,resultBtree),'result';
// // };

// // const dfs = (node, path, result) => {
// // 	if (!node) {
// // 		return;
// // 	}

// // 	const newPath = [...path, node.value];

// // 	if (!node.left && !node.right) {
// // 		result.push(newPath);
// // 		return
// // 	}

// // 	dfs(node.left, newPath, result);
// // 	dfs(node.right, newPath, result);
// // };
