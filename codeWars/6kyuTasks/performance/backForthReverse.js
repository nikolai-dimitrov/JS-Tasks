// A list S will be given. You need to generate a list T from it by following the given process:

// 1. Remove the first and last element from the list S and add them to the list T.
// 2. Reverse the list S
// 3. Repeat the process until list S gets emptied.

// size of S goes up to 10^6
// Keep the efficiency of your code in mind.
// Do not mutate the Input.

const arrange = (s) => {
	const valuesCopy = [...s];
	let valuesLen = s.length;
	const result = [];

	for (let i = 0; i < valuesLen / 2; i++) {
		if (valuesCopy.length - i == 1) {
			result.push(valuesCopy.pop());
			break;
		}

		const right = valuesCopy.pop();
		const left = s[i];
		if (i % 2 == 0) {
			result.push(...[left, right]);
		} else {
			result.push(...[right, left]);
		}
	}

	return result;
};

arrange([-2, 9, 5, 1, 9, 7, -9, -8, -1, 3, -1, 1, 2, 7, 0, -3, 7, 0, 3]);
arrange([1, 2, 3, 4, 5, 6]);
arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]);
