// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
const findUnique = (arr) => {
	const set = new Set(arr);
	const [value1, value2] = set.values();
	const [v1, v2] = [value1, value2].sort((a, b) => a - b);
	let x = arr.slice(0, 3).filter((el) => el == v1);
	if (x.length == 0 || x.length == 1) {
		return v1;
	} else  {
		return v2;
	}
};
// const findUnique = () => {
	// let x = arr
	// 	.slice(0, 3)
	// 	.filter((el, index) => el != arr[0] && index)

	// let nonUniqueEl = null;
	// let uniqueEl = null;
	// let result = null;

	// if (x.length == 0) {
	// 	nonUniqueEl = arr[0];
	// 	result = arr.filter((el) => el != nonUniqueEl);
	// } else if(x.length == 1) {
	// 	uniqueEl = x;
	// 	result = arr.filter((el) => el == uniqueEl);
	// }else {
	//     uniqueEl = arr[0]
	// 	result = arr.filter((el) => el == uniqueEl);

	// }

	// return Number(result.join());
// }

console.log(findUnique([1, 2, 2]));

console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([3, 10, 3, 3, 3]));
console.log(findUnique([1, 0, 0]));
console.log(findUnique([0, 1, 0]));
console.log(findUnique([0, 0, 1]));
