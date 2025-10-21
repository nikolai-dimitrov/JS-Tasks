const stepDown = (stair, width) => {
	const result = [];
	if (stair < 0) {
		return result;
	}

	result.unshift(stair);
	stair -= width;

	let x = stepDown(stair, width);
	result.unshift(...x);


	return result;
};

console.log(stepDown(10, 1));
console.log(stepDown(80, 10));
console.log(stepDown(49, 10));
console.log(stepDown(5, 7));
