// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.


const encrypt = (str, n) => {
	if (str.length == 0 || n < 0) {
		return str;
	}

	let splittedString = str.split("");

	for (let i = 0; i < n; i++) {
		const odd = splittedString.filter((el, index) => index % 2 == 0);
		const even = splittedString.filter((el, index) => index % 2 != 0);

		splittedString = [...even, ...odd];
	}

	return splittedString.join("");
};

console.log(encrypt("012345", 3));
console.log(encrypt("01234", 3));


