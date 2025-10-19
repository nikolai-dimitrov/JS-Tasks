// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4

// Example
// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:
// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]
// When your function has reduced the array to a single integer following these rules, it should return that integer.

const arrayReducer = (input) => {
	if (input.length == 1) {
        // console.log(input.join(""))
		return Number(input.join(""));
	}

	let sequenceLen = 1;
	const modifiedInput = [];
	for (let i = 0; i < input.length; i++) {
		const currentNum = input[i];
        const nextNum = input[i + 1]

		if (currentNum == nextNum) {
			sequenceLen += 1;
			continue;
		}

		modifiedInput.push(sequenceLen);
		sequenceLen = 1;
	}

	return arrayReducer(modifiedInput);
};

console.log(arrayReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));
// arrayReducer([5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1])
// arrayReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0])
// arrayReducer([6,6,6,6]);
// arrayReducer([2,4,9]);
// arrayReducer([7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3])


