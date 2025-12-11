// Given a string "baceb" you can split it into substrings: b, ba, bac, bace, baceb, a, ac, ace, aceb, c, ce, ceb, e, eb, b. The number of vowels in each of these substrings is 0, 1, 1, 2, 2, 1, 1, 2, 2, 0, 1, 1, 1, 1, 0; if you sum up these number, you get 16 - the expected output.
// Note: your solution should have linear time complexity.

const vowelRecognition = (input) => {
	const vowels = ["a", "e", "i", "o", "u"];
	let n = input.length;
	let result = 0;

	for (let i = 0; i < n; i++) {
		const currentChar = input[i].toLowerCase();

		if (vowels.includes(currentChar)) {
			result += (i + 1) * (n - i);
		}
	}

	return result;
};

vowelRecognition("baceb");
vowelRecognition("aeiou");
vowelRecognition("aeiouAEIOU");
