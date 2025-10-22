// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
const arrayDiff = (a, b) => {
    a = a.filter(el => !b.includes(el))
    
	return a;
};

arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2], [1]);
arrayDiff([1, 2, 2], [2]);
arrayDiff([1, 2, 2], []);
arrayDiff([], [1, 2]);
arrayDiff([1, 2, 3], [1, 2]);
