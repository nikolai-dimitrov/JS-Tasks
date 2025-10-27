const countBits = (n) => {
	const bits = [];
	while (n > 0) {
		bits.push(n % 2);
		n = Math.floor(n / 2);
	}

	return bits
		.reverse()
		.filter((el) => Number(el) == 1)
		.join("").length;
};

console.log(countBits(1234));
