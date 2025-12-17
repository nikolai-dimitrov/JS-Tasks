// E.g Given the array [7, 6, 15, 8]

// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0110)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15]
const sortByBits = (arr) => {
	arr.sort((a, b) => {
		const aBits = a
			.toString(2)
			.split("")
			.reduce((acc, value) => acc + Number(value), 0);

		const bBits = b
			.toString(2)
			.split("")
			.reduce((acc, value) => acc + Number(value), 0);

		if (aBits < bBits) {
			return -1;
		}

		if (aBits > bBits) {
			return 1;
		}

		if (aBits == bBits) {
			return a - b;
		}
	});

	return arr;
};

sortByBits([7, 6, 15, 8]);
sortByBits([3, 8, 3, 6, 5, 7, 9, 1]);
