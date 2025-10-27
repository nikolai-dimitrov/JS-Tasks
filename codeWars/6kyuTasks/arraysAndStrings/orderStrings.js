const orderStrings = (words) => {
	const map = {};
	if (words.length == 0) {
		return "";
	}

	words.split(" ").forEach((word) => {
		word.split("").forEach((letter) => {
			if (Number(letter)) {
				map[Number(letter)] = word;
			}
		});
	});

	return Object.values(map).join(" ");
};

orderStrings("is2 Thi1s T4est 3a");
orderStrings("4of Fo1r pe6ople g3ood th5e the2");
orderStrings("");
