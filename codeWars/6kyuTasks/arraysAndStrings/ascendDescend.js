// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length

const ascendDescend = (length, minimum, maximum) => {
	let current = minimum;
	let result = "";
	let increase = true;
	if (maximum < minimum) {
		return result;
	}

	if (minimum == maximum) {
		return (result = minimum.toString().repeat(length).slice(0, length));
	}

	while (result.length < length) {
		result += `${current}`;

		if (current == maximum) {
			increase = false;
		} else if (current == minimum) {
			increase = true;
		}

		if (increase) {
			current += 1;
		} else {
			current -= 1;
		}
	}

	return result.slice(0, length);
};

console.log(ascendDescend(1, -1, 0));
console.log(ascendDescend(25, -9, -3));
console.log(ascendDescend(5, 10, 12));
console.log(ascendDescend(5, 1, 1));

// console.log(ascendDescend(5, 1, 3));
// console.log(ascendDescend(5, 1, 1));

// console.log(ascendDescend(14, 0, 2));
// console.log(ascendDescend(11, 5, 9));
