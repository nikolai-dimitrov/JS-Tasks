const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [7, 14, 23, 6, 30, 3, 7];

// Using set is forbidden
function getIntersection(arr1, arr2) {
	const intersections = [];

	arr1.forEach((element) => {
		if (arr2.includes(element) && !intersections.includes(element)) {
			intersections.push(element);
		}
	});

	return intersections;
}

console.log(getIntersection(arr1, arr2));
