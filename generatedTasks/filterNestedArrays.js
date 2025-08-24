const filterNestedArrays = (nestedArr) => {
	const filteredArr = [];

	nestedArr.forEach((currentArr) => {
		if (currentArr.length > 0) {
			const filteredNums = currentArr.filter((el) => el > 0);
			filteredArr.push(...filteredNums);
		}
	});

	console.log(filteredArr);
};

filterNestedArrays([[1, 2, 3], [], [-1, -2], [4, 5]]);
