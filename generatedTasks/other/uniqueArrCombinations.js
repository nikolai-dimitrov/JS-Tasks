const getUniqueArrCombinations = (arr1, arr2) => {
	const result = [];

	arr1.forEach((element1) => {
		arr2.forEach((element2) => {
			result.push([element1, element2]);
		});
	});

	console.log(result);
};

getUniqueArrCombinations([1, 2], [3, 4, 5]);
