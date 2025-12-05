const reverse = (str) => {
	let result = "";

	str = str.split("");

	for (let i = str.length; i > 0; i--) {
		let char = str.pop();
		result += char;
	}

	return result;
};

reverse("hello");
