const filterUnique = (arr) => {
	const numsSet = new Set(arr);
	return Array(...numsSet);
};

console.log(filterUnique([1, 2, 2, 3, 4, 4, 5]));
