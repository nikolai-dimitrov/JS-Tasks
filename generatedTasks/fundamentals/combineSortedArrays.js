const combineArrays = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		const arr1Element = arr1[i];
		const arr2Element = arr2[i];

		arr1Element <= arr2Element
			? result.push(arr1Element, arr2Element)
			: result.push(arr2Element, arr1Element);
	}

    return result
};

combineArrays([1, 3, 5], [2, 4, 6]);
