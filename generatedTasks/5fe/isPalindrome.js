const isPalindrome = (str) => {
	let word = "";
	str = str.replace(" ", "");

	for (i = str.length - 1; i >= 0; i--) {
		const currentChar = str[i];

		if (currentChar != " ") {
			word += currentChar;
		}
	}
	
	return word == str;
};

isPalindrome("race car");
