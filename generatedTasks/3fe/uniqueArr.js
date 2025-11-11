const uniqueArr = (arr) => {
	const map = [];

	arr.forEach((el) => {
		if (!map[el]) {
			map[el] = el;
		}
	});

	return Object.keys(map);
};

const uniqueArray = (arr) => [...new Set(arr)];

console.log(uniqueArr(["a", "b", "c", 1, 1, "a", 2, 3, 3, 7]));
console.log(uniqueArr([1, 1, 2, 3]));
console.log(uniqueArray([1, 1, 2, 3, 7]));
