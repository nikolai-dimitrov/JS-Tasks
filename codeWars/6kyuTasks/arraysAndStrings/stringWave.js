// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.
const wave = (str) => {
	const result = [];

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char.trim() != "") {
			let newStr = str.split("");
			newStr[i] = newStr[i].toUpperCase();
			newStr = newStr.join("");
			result.push(newStr);
		}
	}

	return result;
};

wave("hello");
wave(" s p a c e s ");
wave("codewars");
