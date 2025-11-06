// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

const rot13 = (message) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";

	for (let i = 0; i < message.length; i++) {
		let char = message[i];
		let isLower = false;
		if (char == char.toLowerCase()) {
			isLower = true;
		}

		char = char.toLowerCase();

		if (alphabet.indexOf(char) == -1) {
			result += char;
			continue;
		}

		if (alphabet.indexOf(char) + 13 > alphabet.length - 1) {
			const cipheredChar = alphabet.charAt(
				12 - (alphabet.length - 1 - alphabet.indexOf(char))
			);
			result += isLower ? cipheredChar : cipheredChar.toUpperCase();
		} else {
			const cipheredChar = alphabet.charAt(alphabet.indexOf(char) + 13);
			result += isLower ? cipheredChar : cipheredChar.toUpperCase();
		}
	}

	return result;
};

rot13("test");
// rot13("grfg");
rot13("abz!a*1");
