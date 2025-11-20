const isPalindrome = (str) => {
	const dataArr = str.split("");
	while (dataArr.length > 1) {
		const firstChar = dataArr.shift();
		const lastChar = dataArr.pop();
		if (firstChar == lastChar) {
			continue;
		} else {
			return false;
		}
	}

	return true;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("kayak"));

console.log(isPalindrome("hello"));
