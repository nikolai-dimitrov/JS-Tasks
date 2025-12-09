// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
const partsSums = (ls) => {
	const result = [];
	let max = 0;
	ls.forEach((el) => {
		max += el;
	});

	result.push(max);

	ls.forEach((el, i) => {
		max -= el;
		result.push(max);
	});

	return result;
};

partsSums([]);
partsSums([0, 1, 3, 6, 10]);
partsSums([1, 2, 3, 4, 5, 6]);
partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]);
