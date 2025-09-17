const people = [
	{ name: "Alice", city: "London" },
	{ name: "Bob", city: "Paris" },
	{ name: "Charlie", city: "London" },
	{ name: "Ivan" },
];
const groupBy = (data, groupCriteria) => {
	const result = [];
	for (const obj of data) {
		if (!result[obj[groupCriteria]]) {
			result[obj[groupCriteria]] = [];
		}

		result[obj[groupCriteria]].push(obj);
	}

	console.log(result);
};

groupBy(people, "city");
