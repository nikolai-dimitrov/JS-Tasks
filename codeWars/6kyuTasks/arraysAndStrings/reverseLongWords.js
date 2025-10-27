const reverseWord = (string) => {
	wordsArray = string.split(" ");

	result = "";
	wordsArray.forEach((word) => {
		if (word.length >= 5) {
			result += word.split("").reverse().join("") + " ";
		} else {
			result += word + " ";
		}
	});

	return result.trim();
};

console.log(reverseWord("Hey fellow warriors"));
console.log(reverseWord("Welcome"));
console.log(reverseWord("This is a test"));
console.log(reverseWord("This is another test"));
