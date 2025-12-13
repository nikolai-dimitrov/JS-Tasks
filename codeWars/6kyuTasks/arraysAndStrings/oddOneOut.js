// Complete the function that takes a string as an input, and return a list of all the unpaired characters (i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

// In case of multiple appearances to choose from, take the last occurence of the unpaired character.

// Your solution should be linear in terms of string length to pass the last test!
const oddOneOut = (str) => {
	const occurrences = new Map();

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (!occurrences.has(char)) {
			occurrences.set(char, 0);
		}

		let occValue = occurrences.get(char);

		occValue += 1;
		occurrences.set(char, occValue);

		if (occurrences.get(char) == 2) {
			occurrences.delete(char);
		}
	}

	return Array.from(occurrences.keys());
};

console.log(oddOneOut("Hello World"));
console.log(oddOneOut("Codewars"));
console.log(oddOneOut("racecar"));
console.log(oddOneOut("Mamma"));
console.log(oddOneOut("Mama"));
console.log(oddOneOut("¼ x 4 = 1"));
console.log(oddOneOut("¼ x 4 = 1 and ½ x 4 = 2"));
