// const tree = {
// 	name: "root",
// 	children: [
// 		{ name: "child1", children: [] },
// 		{
// 			name: "child2",
// 			children: [{ name: "grandchild1", children: [] }],
// 		},
// 	],
// };

const tree = {
	name: "root",
	children: [
		{ name: "child1", children: [] },
		{
			name: "child2",
			children: [
				{
					name: "grandchild1",
					children: [
						{
							name: "grandGrandchild1",
							children: [
								{ name: "mostGrandChild1", children: [] },
							],
						},
					],
				},
			],
		},
	],
};

const treeRecursion = (node) => {
	let result = [node.name];
	for (const child of node.children) {
		let childResult = treeRecursion(child);
		if (childResult) {
			result.push(...childResult);
		}
	}

	return result;
};

console.log(treeRecursion(tree));
// expected output[("root", "child1", "child2", "grandchild1")];
