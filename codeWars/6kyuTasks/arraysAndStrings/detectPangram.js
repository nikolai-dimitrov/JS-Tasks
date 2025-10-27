const isPangram = (string) => {
	const map = {};
	string = string.toLowerCase();

	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (char.charCodeAt() >= 97 || char.charCodeAt <= 122) {
			if (!map[char]) {
				map[char] = 0;
			}

			map[char] += 1;
		}
	}
	return Object.keys(map).length == 26 ? true : false;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("abcdefghijklmnopqrstuvwxy"));
