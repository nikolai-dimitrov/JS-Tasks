const calcBooks = (books, categories) => {
	const counter = {};
	let result = [];

	if (books.length == 0 || categories.length == 0) {
		return "";
	}

	categories.forEach((el) => {
		counter[el] = 0;
	});

	for (const bookData of books) {
		const [category, count] = bookData.split(" ");
		const categoryName = category[0];

		if (counter[categoryName] != undefined) {
			counter[categoryName] += Number(count);
		}
	}

	Object.entries(counter).map(([category, count]) => {
		result.push(`(${category} : ${count})`);
	});

	return result.join(" - ");
};

console.log(
	calcBooks(
		["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
		["A", "B", "C", "D"]
	)
);

console.log(
	calcBooks(
		["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
		["A", "B"]
	)
);
