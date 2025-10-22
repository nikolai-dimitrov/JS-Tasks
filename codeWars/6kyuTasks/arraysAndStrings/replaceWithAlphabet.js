const replace = (string) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
    
	for (let i = 0; i < string.length; i++) {
		const letter = string[i].toLowerCase();

		if (alphabet.indexOf(letter) != -1) {
			result += `${alphabet.indexOf(letter) + 1} `;
		}
	}

	return result.trim();
};

replace("The sunset sets at twelve o' clock.");
