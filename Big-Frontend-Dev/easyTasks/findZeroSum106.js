// 1. trqbva da sa ednakvi chisla i 1 to ot tqh da e otricatelno
// 2.
const findTwo = (arr) => {
	const numsMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		numsMap.set(num, i);
	}

	for (const key of numsMap.keys()) {
		const currentNum = numsMap.get(key);
		if (numsMap.has(-currentNum)) {
			return [key, -currentNum].join(" ");
		}
	}

	return null;
};

console.log(findTwo([1, 2, 3, -1]));
console.log(findTwo([1, 2, 3, -1, -2, 0]));
console.log(findTwo([1, 2, 3, 4]));
// null
