const intersection = (arr1, arr2) => {
	const map = {};
	const unique = [];

	for (let i = 0; i < arr1.length; i++) {
		const el = arr1[i];
		if (!map[el]) {
			map[el] = 0;
			map[el] += 1;
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		const el = arr2[i];
		if (map[el]) {
			map[el] += 1;
			unique.push(el);
		}
	}
    
	return unique;
};

intersection([1, 2, 2, 2, 3], [2, 3]);
intersection(["a", "b", "c"], ["b"]);
