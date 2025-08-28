const intersect = (arr1, arr2) => {
	const result = [];
	let firstPointer = arr1.length - 1;
	let secondPointer = arr2.length - 1;

	while (firstPointer >= 0 && secondPointer >= 0) {
		if (arr1[firstPointer] == arr2[secondPointer]) {
			result.push(arr1[firstPointer]);
			firstPointer -= 1;
			secondPointer -= 1;
		} else if (arr1[firstPointer] > arr2[secondPointer]) {
			firstPointer -= 1;
		} else {
			secondPointer -= 1;
		}
	}
	console.log(result);
	return result;
};

//   [  1, +, +, -, -,    +];
//  [+, +, +, -, -, -,    -];
intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000]);
