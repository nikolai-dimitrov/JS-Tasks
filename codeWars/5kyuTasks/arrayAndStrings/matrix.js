// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"

// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array
const toRange = (arr) => {
	const result = [];
	let tempResult = [];
	let resultString = "";

	if (arr.length == 1) {
		result.push(arr);
		resultString += arr[0];
		return resultString;
	}

	arr = Array(...new Set(arr)).sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		const currentNum = arr[i];
		const nextNum = arr[i + 1];
		if (currentNum + 1 == nextNum) {
			tempResult.push(currentNum);
		} else {
			tempResult.push(currentNum);
			result.push(tempResult);
			tempResult = [];
		}
	}

	result.forEach((el) => {
		if (el.length > 1) {
			resultString += `${el[0]}_${el[el.length - 1]},`;
		} else {
			resultString += `${el[0]},`;
		}
	});

	if (resultString.endsWith(",")) {
		resultString = resultString.slice(0, resultString.length - 1);
	}
	console.log(resultString);
	return resultString;
};

const toArray = (str) => {
	const result = [];

	if (str.length == 0) {
		return []
	}

	str.split(",").forEach((el) => {
		const sequence = el.split("_");
		if (sequence.length > 1) {
			for (i = Number(sequence[0]); i <= Number(sequence[1]); i++) {
				result.push(Number(i));
			}
		} else {
            console.log(el)
			result.push(Number(el));
		}
	});

	return result;
};

// toRange([1,3])
// toRange([4, 1, 2, 3, 3]);
// toRange([3, 4, 5, 6, 9]);
// toRange([5, 6, 7, 8, 9]);
// toRange([5, 6, 8, 9]);
// toRange([1, 3, 5, 7,9]);

// toArray("1,3,5,7,9")
// toArray("1_4");
// toArray("3_6,9");
// toArray("5_6,8_9");
// toArray("6");
// console.log(toArray(""));
// toArray('1_4,6_10,12,14_18,20_32,34_35,37_68,70_74,76_85,87_99')
// console.log(toRange([6]));
