const countDuplicates = (arr) => {
	const duplicatesCount = {};
	arr.forEach((element) => {
		if (!duplicatesCount[element]) {
			duplicatesCount[element] = 0;
		}

		duplicatesCount[element] += 1;
	});

	console.log(duplicatesCount)
};

countDuplicates(["a", "b", "a", "c", "b", "a"]);
