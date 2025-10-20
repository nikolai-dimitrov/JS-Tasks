const maxSum = (root) => {
	const allRoutes = [];
	if (!root) {
		return 0;
	}

	function sumRoutes(currentNode, currentRoute) {
		if (currentNode == null) {
			return 0;
		}

		currentRoute.push(currentNode.value);

		if (currentNode.left == null && currentNode.right == null) {
			// Instead of pushing current route, push sum of elements in current route.
			allRoutes.push(
				currentRoute.reduce(
					(accumulator, currentValue) => accumulator + currentValue,
					0
				)
			);

			return;
		}

		sumRoutes(currentNode.left, [...currentRoute]);
		sumRoutes(currentNode.right, [...currentRoute]);
	}

	let startRoute = [];
	sumRoutes(root, startRoute);

	return Math.max(...allRoutes);
};
console.log(maxSum({}));
// console.log(
// 	maxSum({
// 		value: 10,
// 		left: { value: 1, left: null, right: null },
// 		right: { value: 2, left: null, right: null },
// 	})
// );

// console.log(
// 	maxSum({
// 		value: 11,
// 		left: { value: 0, left: null, right: null },
// 		right: {
// 			value: 0,
// 			left: null,
// 			right: { value: 1, left: null, right: null },
// 		},
// 	})
// );
