// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
const getSubstrings = (a1, a2) => {
	const wordsString = a2.join(", ");
	const result = [];

	a1.forEach((el) => {
		if (wordsString.includes(el)) {
			result.push(el);
		}
	});

	return result.sort((a, b) => a.localeCompare(b));
};

console.log(
	getSubstrings(
		["live", "strong", "arp"],
		["lively", "alive", "harp", "sharp", "armstrong"]
	)
);

console.log(
	getSubstrings(
		["arp", "live", "strong"],
		["lively", "alive", "harp", "sharp", "armstrong"]
	)
);

console.log(
	getSubstrings(
		["tarp", "mice", "bull"],
		["lively", "alive", "harp", "sharp", "armstrong"]
	)
);
