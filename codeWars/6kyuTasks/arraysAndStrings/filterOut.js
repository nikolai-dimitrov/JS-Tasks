// that given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed.
Array.prototype.remove = function (pred) {
	const returnElements = [];
	const result = [];
	const cache = {};

	this.forEach((el) => {
		if (!pred(el)) {
			returnElements.push(el);
		} else {
			result.push(el);
		}
	});

	this.length = 0;
	this.push(...returnElements);

	return result;
};

const array = [1, 2, 3, 4, 5];

const removed = array.remove(function (a) {
	return a % 2 === 0;
});

