// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
const encrypt = (str) => {
	const result = [];

	str.split(" ").forEach((word) => {
		let encryptedWord = "";
		if (word.length == 1) {
			encryptedWord = word.charCodeAt().toString();
		} else if (word.length == 2) {
			encryptedWord = word[0].charCodeAt() + word[1];
		} else {
			encryptedWord =
				word[0].charCodeAt() +
				word[word.length - 1] +
				word.slice(2, word.length - 1) +
				word[1];
		}

		result.push(encryptedWord);
	});

	return result.join(" ");
};

console.log(encrypt("A"));
console.log(encrypt("A wise old owl lived in an oak"));
console.log(encrypt("Hello"));
// console.log(encrypt("good"));
// console.log(encrypt("hello world"));
// console.log(encrypt("Why can we not all be like that wise old bird"))
