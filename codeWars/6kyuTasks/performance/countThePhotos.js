// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.
// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".

const countPhotos = (road) => {
	const dotsIndexes = [];
	const rightArrowsIndexes = [];
	let count = 0;

	road.split("").forEach((el, i) => {
		if (el == ".") {
			dotsIndexes.push(i);
			count += rightArrowsIndexes.length;
		}

		if (el == "<") {
			count += dotsIndexes.length;
		}

		if (el == ">") {
			rightArrowsIndexes.push(i);
		}
	});

	console.log(dotsIndexes);
	console.log(rightArrowsIndexes);
	console.log(count);
	return count;
};

countPhotos(".><.>>.<<");
countPhotos(">..<<.>.<.");
countPhotos(".>>>");
countPhotos(">.>..<");
