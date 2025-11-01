const moveZeroes = (arr) => {
	const result = [];
	const zeroesArr = [];

	while (arr.length > 0) {
		const currentEl = arr.shift();
		if (currentEl !== 0) {
			result.push(currentEl);
		} else {
			zeroesArr.push(currentEl);
		}
	}

	return result.concat(zeroesArr);
};

console.log(moveZeroes([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeroes([1,2,0,1,0,1,0,3,0,1]))