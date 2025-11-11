const reverseStr = (str) => {
	let result = "";
	if (str.length == 0) return str;

	for (i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}

	return result;
};

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("abc"));
console.log(reverseStr("hello"));
console.log(reverseStr(""));
