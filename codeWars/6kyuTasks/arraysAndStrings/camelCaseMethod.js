String.prototype.camelCase = function () {
	if (this.length == 0) {
		return "";
	}

	let string = String(this);
	const result = [];

	string.split(" ").forEach((word) => {
		result.push(word[0].toUpperCase() + word.slice(1, word.length));
	});

	return result.join("");
};

let x = "hello case".camelCase();
let y = ''.camelCase()
console.log(y);
