// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
const cleanString = (s) => {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const currentChar = s[i];
		if (currentChar != "#") {
			stack.push(currentChar);
		} else {
			stack.pop();
		}
	}

	return stack.join("");
};

cleanString("abc#d##c");
cleanString("abc##d######");
cleanString("");
