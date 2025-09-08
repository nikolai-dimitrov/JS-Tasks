// Return array with elements which appears in two arrays
// No using set or includes
const getIntersection = (firstArray, secondArray) => {
	const valuesAppeared = Object.fromEntries(firstArray.map((el) => [el, 0]));
	const result = [];
	secondArray.forEach((el) => {
		if (valuesAppeared[el] == 0) {
			valuesAppeared[el] += 1;
		}
	});

	for (const key in valuesAppeared) {
		if (valuesAppeared[key] > 0) {
			result.push(key);
		}
	}

	console.log(result);
};

const firstArray = [1, 2, 3, 4];
const secondArray = [3, 4, 5, 6];

getIntersection(firstArray, secondArray);

// Return array with elements which appears in two arrays

// const getIntersection = (firstArray, secondArray) => {
// 	const firstArrDataMap = Object.fromEntries(firstArray.map((el) => [el, 0]));

// 	secondArray.forEach((el) => {
// 		if (firstArrDataMap[el] == 0) {
// 			firstArrDataMap[el] += 1;
// 		}
// 	});

// 	const intersectionsObject = Object.fromEntries(
// 		Object.entries(firstArrDataMap).filter(([key, value]) => value >= 1)
// 	);

// 	const result = Object.keys(intersectionsObject);
// 	return result;
// };
// const firstArray = [1, 2, 3, 4];
// const secondArray = [3, 4, 5, 6];

// getIntersection(firstArray, secondArray);
