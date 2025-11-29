// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false
const scramble = (string1, targetWord) => {
	const existingDigits = {};

	for (const char of string1) {
		if (!existingDigits[char]) {
			existingDigits[char] = 0;
		}

		existingDigits[char] += 1;
	}

	for (const char of targetWord) {
		if (!existingDigits[char]) {
			return false;
		}

		existingDigits[char] -= 1;

		if (existingDigits[char] < 0) {
			return false;
		}
	}

	return true;
};
console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
console.log(scramble("commas", "commas"));
console.log(scramble("sammoc", "commas"));
