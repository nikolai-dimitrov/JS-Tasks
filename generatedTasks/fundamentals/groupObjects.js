const groupBy = (arr) => {
	const result = {};
	arr.forEach((el) => {
		const currentDept = el["dept"];

		if (!result[currentDept]) {
			result[currentDept] = [];
		}

		result[currentDept].push(el["name"]);
	});

	return result;
};

groupBy([
	{ name: "Ivan", dept: "HR" },
	{ name: "Maria", dept: "IT" },
	{ name: "Petar", dept: "HR" },
]);
