const uniqueValuesFilter = (valuesArr) => {
	const uniqueValuesArray = [];

	valuesArr.forEach((element) => {
		if (!uniqueValuesArray.includes(element)) {
			uniqueValuesArray.push(element);
		}
	});

	console.log(uniqueValuesArray);
};

uniqueValuesFilter([1, 2, 2, 3, 4, 4, 5]);
