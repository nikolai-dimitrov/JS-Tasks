const validBraces = (s) => {
	const q = [];

	s = s.split("");

	for (let i = 0; i < s.length; i++) {
		const c = s[i];
		if (c == "{") {
			q.push("{");
		} else if (c == "}") {
			if (q.length == 0) {
				return false;
			}

			q.pop();
		}
	}

	return q.length == 0 ? true : false;
};

// console.log(validBraces("{{}}"));
// console.log(validBraces("{}{}{}{}"));
// console.log(validBraces("{{{}{}}}"));
// console.log(validBraces("{}}"));
// console.log(validBraces("{{{{}}"));
// console.log(validBraces(""));
console.log(
	validBraces(
		"{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}{{{{}}}}}}"
	)
);
