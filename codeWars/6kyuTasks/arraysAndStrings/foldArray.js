// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

const fold = (arr, runs) => {
	const arrCopy = [...arr];
	if (runs == 0) {
		return arrCopy;
	}

	const middleIndex =
		arr.length % 2 == 0 ? arr.length / 2 - 1 : Math.floor(arr.length / 2);

	const secondHalf = arrCopy
		.splice(middleIndex + 1, arrCopy.length)
		.reverse();

	secondHalf.forEach((num, i) => {
		arrCopy[i] += num;
	});

	return fold(arrCopy, runs - 1);
};
console.log(fold([1, 2, 3, 4, 5], 3));
console.log(fold([1, 2, 3, 4, 5], 2));
console.log(fold([1, 2, 3, 4, 5], 1));

console.log(fold([1, 2, 3, 4, 5, 6]));

console.log(fold([-9, 9, -8, 8, 66, 23], 1));
