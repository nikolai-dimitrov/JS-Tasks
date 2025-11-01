// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.
let items = [1, 2, 3, 4, 5, 6];

const partitionOn = (pred, arr) => {
	const matched = [];
	const notMatched = [];
	arr.forEach((item) => {
		if (pred(item) === false) {
			notMatched.push(item);
		} else {
			matched.push(item);
		}
	});

	arr.splice(0, arr.length, ...notMatched,...matched);

	return arr.findIndex((el) => pred(el) == true);
};

function isEven(n) {
	return n % 2 == 0;
}

console.log(partitionOn(isEven, items));

